# -*- coding: utf-8 -*-
# Met en page les guides cadeaux écrits par le serveur (un par produit) en PDF A5 numérotés :
# boutique/bonus/<produit>.pdf, et tient à jour boutique/bonus/index.json (le serveur l'y lit pour les offrir).
import json, os, re, sys, html, urllib.request, subprocess

API = os.environ.get('API', '')
DOSSIER = 'boutique/bonus'
os.makedirs(DOSSIER, exist_ok=True)

def appel(o):
    req = urllib.request.Request(API, data=json.dumps(o).encode(), headers={'Content-Type': 'text/plain', 'User-Agent': 'Mozilla/5.0'})
    return json.loads(urllib.request.urlopen(req, timeout=120).read())

AUTORISES = {'h3', 'p', 'ul', 'ol', 'li', 'b', 'strong', 'em', 'i', 'br', 'div'}
def propre(h):
    h = re.sub(r'(?is)<(script|style|iframe|object)[^>]*>.*?</\1>', '', h)
    def tag(m):
        fin, nom, attrs = m.group(1), m.group(2).lower(), m.group(3) or ''
        if nom not in AUTORISES: return ''
        if nom == 'div' and not fin:
            c = re.search(r'class\s*=\s*["\']encadre\s+(vert|bleu|or|rouge)["\']', attrs)
            return '<div class="encadre ' + (c.group(1) if c else 'bleu') + '">'
        if nom == 'h3' and not fin: return '<h3>'
        return '<' + fin + nom + '>'
    return re.sub(r'<(/?)([a-zA-Z0-9]+)([^>]*)>', tag, h)

CSS = open(os.path.join(os.path.dirname(__file__), 'guide.css'), encoding='utf-8').read()
E = html.escape

def page_fixe(titre, chap, contenu):
    return '<section class="fixe"><div class="chap">' + E(chap) + '</div><h2>' + E(titre) + '</h2>' + contenu + '</section>'

def carnet(d0, d1):
    rows = ''.join('<tr><td>Jour ' + str(j) + '</td>' + '<td class="case"></td>' * 5 + '</tr>' for j in range(d0, d1 + 1))
    return ('<p class="intro">Cochez chaque case quand c’est fait. Cherchez la régularité, pas la perfection.</p>'
            '<table class="carnet"><tr><th></th><th>Produit pris</th><th>Conseil du guide</th><th>Eau 1,5 L</th><th>Mouvement</th><th>Bon sommeil</th></tr>' + rows + '</table>')

def construire(g, pages_chap=None):
    ch = g['chapitres']
    som = ''.join('<li><span>' + str(i + 1) + '. ' + E(c['titre']) + '</span><span class="pts"></span><span>' + (str(pages_chap[i]) if pages_chap else '') + '</span></li>' for i, c in enumerate(ch))
    corps = ['<section class="couv"><div class="haut"><span class="offert">Guide offert</span><h1>' + E(g['titre']) + '</h1><p class="st">' + E(g.get('sous_titre', '')) + '</p></div>'
             '<div class="chips"><span>' + str(len(ch)) + ' chapitres pratiques</span><span>Des conseils simples au quotidien</span><span>Un carnet de suivi de 21 jours</span></div><div class="bas">ABROMARKET</div></section>',
             page_fixe('Ce que vous trouverez dans ce guide', 'Sommaire', '<ul class="som">' + som + '</ul>'),
             page_fixe('Comment utiliser ce guide', 'Avant de commencer',
                 '<p class="intro">Merci pour votre confiance. Ce guide vous est offert pour vous accompagner au quotidien, avec des gestes simples.</p>'
                 '<ul><li><b>Lisez un chapitre par jour</b>, à votre rythme.</li><li><b>Choisissez un ou deux conseils</b> et appliquez-les dès aujourd’hui.</li>'
                 '<li><b>Remplissez le carnet de 21 jours</b> à la fin du guide : cocher chaque jour aide à garder le cap.</li></ul>'
                 '<div class="encadre or"><b>Important.</b> Ce guide donne des conseils généraux de bien-être. Il ne remplace pas l’avis d’un médecin ou d’un pharmacien. '
                 'En cas de maladie, de traitement, de grossesse, d’allaitement ou de douleur qui dure, demandez conseil à un professionnel de santé.</div>')]
    for i, c in enumerate(ch):
        corps.append('<section class="chapitre"><div class="num">Chapitre ' + str(i + 1) + '</div><h2>' + E(c['titre']) + '</h2>' + propre(c['html']) + '</section>')
    corps += [page_fixe('Mes objectifs pour 21 jours', 'Votre carnet',
                  '<p class="intro">Des objectifs simples et précis sont plus faciles à tenir.</p><div class="lignes-ecr"><b>Ce que je change dans mon alimentation :</b><span></span><span></span>'
                  '<b>Ce que je change dans mes habitudes :</b><span></span><span></span><b>Mon moment pour prendre mon produit :</b><span></span><b>Pourquoi c’est important pour moi :</b><span></span><span></span></div>'),
              page_fixe('Carnet de suivi · jours 1 à 7', 'Votre carnet', carnet(1, 7)),
              page_fixe('Carnet de suivi · jours 8 à 14', 'Votre carnet', carnet(8, 14)),
              page_fixe('Carnet de suivi · jours 15 à 21', 'Votre carnet', carnet(15, 21)),
              page_fixe('Mon bilan après 21 jours', 'Votre carnet',
                  '<div class="lignes-ecr"><b>Ce qui a été facile :</b><span></span><span></span><b>Ce qui a été difficile :</b><span></span><span></span>'
                  '<b>Comment je me sens aujourd’hui :</b><span></span><span></span><b>Ce que je garde pour la suite :</b><span></span><span></span></div>'),
              page_fixe('Merci et à bientôt', 'Mot de fin',
                  '<p class="intro">Prendre soin de soi, c’est un cadeau que l’on se fait pour aujourd’hui et pour demain.</p>'
                  '<p>Gardez ce guide à portée de main, relisez les chapitres qui vous sont utiles et soyez régulier : ce sont les petites habitudes de chaque jour qui font la différence.</p>'
                  '<div class="encadre or">Ce guide donne des informations générales de bien-être. Il ne remplace pas une consultation. En cas de doute, de douleur qui dure ou de traitement en cours, parlez-en à un médecin ou à un pharmacien.</div>'
                  '<p class="signature">Avec toute l’équipe ABROMARKET</p>')]
    return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>' + E(g['titre']) + '</title><style>' + CSS + '</style></head><body>' + ''.join(corps) + '</body></html>'

def imprimer(htm, sortie, titre):
    open('/tmp/guide.html', 'w', encoding='utf-8').write(htm)
    subprocess.run(['node', os.path.join(os.path.dirname(__file__), 'pdf.js'), '/tmp/guide.html', sortie, titre], check=True)

def pages_des_chapitres(pdf, n):
    from pypdf import PdfReader
    r = PdfReader(pdf); out = []
    textes = [(p.extract_text() or '') for p in r.pages]
    for i in range(n):
        k = next((j + 1 for j, t in enumerate(textes) if j >= 3 and re.search(r'(^|\n)\s*Chapitre\s+' + str(i + 1) + r'\s*(\n|$)', t, re.I)), None)
        out.append(k or '')
    return out, len(r.pages)

idx_f = os.path.join(DOSSIER, 'index.json')
try: INDEX = json.load(open(idx_f, encoding='utf-8'))
except Exception: INDEX = {}
guides = [json.load(open(os.environ['GUIDE_TEST'], encoding='utf-8'))] if os.environ.get('GUIDE_TEST') else appel({'type': 'bonusTextes'}).get('guides', [])
fait = 0
for g in guides:
    s = re.sub(r'[^a-z0-9-]', '', g.get('slug', ''))
    if not s or len(g.get('chapitres', [])) < 6 or any(not c or not c.get('html') for c in g['chapitres']): continue
    sortie = os.path.join(DOSSIER, s + '.pdf')
    imprimer(construire(g), sortie, g['titre'])
    pc, n = pages_des_chapitres(sortie, len(g['chapitres']))
    imprimer(construire(g, pc), sortie, g['titre'])      # 2e passage : sommaire avec les numéros de page
    _, n = pages_des_chapitres(sortie, len(g['chapitres']))
    INDEX[s] = {'titre': g['titre'], 'pages': n, 'produit': g.get('produit', '')}
    print('Guide « %s » : %d pages' % (g['titre'], n)); fait += 1
json.dump(INDEX, open(idx_f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(fait, 'guide(s) mis en page')
