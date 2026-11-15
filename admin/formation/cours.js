/* Formation « Publicité rentable » — contenu unique utilisé par l'application, le PDF et la vidéo.
   Chaque module : titre, but, sections (h = sous-titre, html = contenu), retenir (points clés). */
window.FORMATION = {
  titre: 'Publicité rentable sur Facebook et Instagram',
  sousTitre: 'De A à Z : vendre en paiement à la livraison sans gaspiller son budget',
  version: '1.0 · novembre 2026',
  modules: [
  {
    titre: 'Avant la pub : vos chiffres',
    but: 'Savoir combien vous pouvez payer pour une commande avant de dépenser 1 dollar.',
    sections: [
      { h: 'Le principe', html: `<p>Une publicité n'est ni « chère » ni « pas chère ». Elle est <b>rentable</b> ou <b>pas rentable</b> par rapport à <b>vos</b> chiffres. Sans ces chiffres, vous décidez au hasard, et le hasard coûte cher.</p>
<p>En paiement à la livraison, l'argent n'arrive <b>que quand le colis est livré</b>. Une commande, c'est une promesse. Une livraison, c'est de l'argent. Toute la formation repose sur cette idée.</p>` },
      { h: 'Calcul 1 : la marge par colis livré', html: `<p><b>Marge = prix de vente − prix d'achat du produit − frais de livraison et de l'agence</b></p>
<div class="ex"><b>Exemple</b><br>Prix de vente : 16 500 FCFA<br>Prix d'achat du produit : 2 600 FCFA<br>Frais de l'agence (livraison + traitement) : 3 000 FCFA<br><b>Marge par colis livré : 10 900 FCFA</b> (environ 18 $)</div>
<p>Si l'agence facture aussi les commandes non livrées, ajoutez ce coût dans votre calcul.</p>` },
      { h: 'Calcul 2 : le taux de livraison', html: `<p><b>Taux de livraison = colis livrés ÷ commandes reçues</b></p>
<p>Sur 10 commandes, combien sont vraiment payées par le client ? C'est le chiffre le plus important de votre activité, et c'est votre agence de livraison qui vous le donne. Un bon taux en paiement à la livraison se situe entre <b>50 % et 70 %</b>. En dessous de 40 %, aucune publicité ne peut vous rendre rentable.</p>` },
      { h: 'Calcul 3 : le coût maximum par commande', html: `<p>Pour garder un bénéfice, ne dépensez pas plus de <b>la moitié de votre marge</b> en publicité par colis livré.</p>
<p><b>Coût cible par colis livré = marge ÷ 2</b><br><b>Coût cible par achat Meta = coût cible par colis livré × taux de livraison</b></p>
<div class="ex"><b>Exemple</b> (marge 10 900 FCFA, taux de livraison 60 %)<br>Coût cible par colis livré : 10 900 ÷ 2 = 5 450 FCFA<br>Coût cible par achat Meta : 5 450 × 0,6 ≈ <b>3 270 FCFA, soit environ 5,5 $</b><br>Point mort (bénéfice zéro) : 10 900 × 0,6 ≈ 6 540 FCFA, soit environ 11 $</div>
<table><tr><th>Taux de livraison</th><th>Coût cible par achat Meta</th><th>Point mort</th></tr>
<tr><td>70 %</td><td>≈ 6,3 $</td><td>≈ 12,6 $</td></tr>
<tr><td>50 %</td><td>≈ 4,5 $</td><td>≈ 9 $</td></tr>
<tr><td>30 %</td><td>≈ 2,7 $</td><td>≈ 5,4 $</td></tr>
<tr><td>10 %</td><td>≈ 0,9 $</td><td>≈ 1,8 $</td></tr></table>
<p>Ce tableau montre une chose capitale : <b>quand la livraison est mauvaise, même une pub « pas chère » fait perdre de l'argent.</b></p>` }
    ],
    retenir: ['L’argent arrive à la livraison, pas à la commande.', 'Marge = prix − produit − frais de livraison.', 'Coût cible par achat Meta = (marge ÷ 2) × taux de livraison.', 'Sous 40 % de livraison, on répare la livraison avant de dépenser en pub.']
  },
  {
    titre: 'Préparer le terrain',
    but: 'Vérifier les 5 points qui font gagner ou perdre de l’argent avant même la première pub.',
    sections: [
      { h: 'Le principe', html: `<p>La publicité ne fait qu'amener des visiteurs. Si la page, le suivi ou la livraison ne sont pas prêts, chaque dollar amène un visiteur qui ne rapportera rien.</p>` },
      { h: 'La liste de contrôle', html: `<ol>
<li><b>Le pixel (jeu de données) est installé</b> et Meta reçoit bien l'événement <b>Achat</b> quand quelqu'un commande. Vérifiez-le dans le Gestionnaire d'événements avec une commande test.</li>
<li><b>Un pixel par boutique ou par pays.</b> Si deux pays partagent un pixel, Meta mélange les acheteurs des deux pays et apprend mal.</li>
<li><b>La page produit est claire :</b> photo du vrai produit, prix visible, « paiement à la livraison » visible, formulaire court mais sérieux (nom, téléphone, ville, adresse précise).</li>
<li><b>Vous avez testé une commande vous-même</b>, du clic sur la pub jusqu'à la page de remerciement.</li>
<li><b>L'agence de livraison est prête :</b> stock reçu, délai d'appel promis (idéalement moins d'une heure), rapport quotidien des livraisons.</li>
</ol>` },
      { h: 'Pourquoi c’est si important', html: `<p>Meta apprend de ce que vous lui envoyez. Si le pixel envoie de faux achats (tests, doublons), Meta cherchera des gens qui ressemblent à ces faux achats. Si l'agence appelle le client deux jours plus tard, le client a déjà changé d'avis : vous avez payé la pub pour rien.</p>` }
    ],
    retenir: ['Un pixel par boutique ou par pays, événement Achat vérifié.', 'Une commande test avant de lancer.', 'Agence prête : stock, appel rapide, rapport chaque jour.']
  },
  {
    titre: 'Combien de campagnes par pays ?',
    but: 'Choisir la bonne structure pour que Meta apprenne vite, sans se faire concurrence à soi-même.',
    sections: [
      { h: 'La règle', html: `<p><b>Par pays et par produit : une campagne principale, plus une campagne de test au maximum.</b> Jamais 5, 8 ou 10 campagnes en même temps sur le même produit et le même pays.</p>` },
      { h: 'Pourquoi ? Raison 1 : l’apprentissage', html: `<p>Chaque ensemble de publicités passe par une <b>phase d'apprentissage</b>. Meta a besoin d'environ <b>50 achats en 7 jours</b> par ensemble pour savoir qui sont vos vrais acheteurs. Avec 25 $ par jour répartis sur 8 campagnes, chacune reçoit 3 $ et n'obtient que 1 ou 2 achats par jour : aucune ne sort de l'apprentissage, et toutes restent chères et instables.</p>` },
      { h: 'Raison 2 : vous vous faites concurrence', html: `<p>8 campagnes qui visent le même pays touchent les mêmes personnes. Elles participent aux <b>mêmes enchères</b> et font monter votre propre prix. Meta l'appelle la <b>fragmentation</b>, et vous le signale dans ses recommandations.</p>` },
      { h: 'Raison 3 : 4 $, c’est trop peu pour juger', html: `<p>Couper une campagne après 4 $ revient à juger un joueur après une minute de match. Avec 1 ou 2 achats, le hasard décide. Vous risquez de couper vos meilleures publicités et de garder les mauvaises.</p>` },
      { h: 'La structure selon votre budget', html: `<table><tr><th>Budget par jour et par pays</th><th>Structure conseillée</th></tr>
<tr><td>Moins de 20 $</td><td>1 campagne · 1 ensemble · 3 publicités (3 vidéos différentes)</td></tr>
<tr><td>20 à 60 $</td><td>1 campagne principale (80 % du budget) + 1 campagne test (20 %)</td></tr>
<tr><td>Plus de 60 $</td><td>1 principale (2 ensembles maximum si les audiences sont vraiment différentes) + 1 test</td></tr></table>
<p>Pour savoir si votre budget suffit : <b>budget par jour ≥ coût par achat × 7</b> donne environ 50 achats par semaine. Avec un coût par achat de 3 $, visez environ 21 $ par jour sur la campagne principale. Si vous n'avez pas ce budget, gardez un seul ensemble : il apprendra plus lentement, mais il apprendra.</p>` }
    ],
    retenir: ['1 campagne principale + 1 test au maximum, par pays et par produit.', 'Environ 50 achats par semaine et par ensemble pour bien apprendre.', 'Plusieurs campagnes sur la même cible = vous montez votre propre prix.']
  },
  {
    titre: 'Configurer la campagne',
    but: 'Créer la campagne pas à pas, et comprendre chaque choix.',
    sections: [
      { h: 'Étape 1 : l’objectif', html: `<p>Dans le Gestionnaire de publicités (sur ordinateur de préférence), cliquez sur <b>Créer</b> et choisissez <b>Ventes</b>.</p>
<p><b>Pourquoi ?</b> L'objectif dit à Meta quoi chercher. « Trafic » amène des cliqueurs, « Interactions » amène des gens qui aiment et commentent. Seul <b>Ventes</b> cherche des personnes qui commandent.</p>` },
      { h: 'Étape 2 : Advantage+ ou manuel', html: `<p>Meta propose par défaut une campagne de ventes <b>Advantage+</b>, où l'algorithme gère une grande partie des réglages. Les deux chemins fonctionnent :</p>
<ul><li><b>Advantage+ activé :</b> simple, souvent efficace quand le pixel reçoit déjà des achats. Vous contrôlez quand même le pays et l'âge minimum.</li>
<li><b>Configuration manuelle :</b> plus de contrôle (emplacements, âge maximum). Modifier ces réglages désactive le statut Advantage+, et ce n'est pas un problème.</li></ul>
<p>Les noms des boutons changent de temps en temps chez Meta. La logique, elle, reste la même.</p>` },
      { h: 'Étape 3 : le nom', html: `<p>Nommez toujours de la même façon : <b>Pays · Produit · Principale · date</b> (exemple : « CI · Calcium · Principale · 15-11 »). Vous retrouvez tout en un coup d'œil, et les rapports de votre boutique deviennent lisibles.</p>` },
      { h: 'Étape 4 : le budget', html: `<ul><li>Activez le <b>budget au niveau de la campagne</b> (Advantage+ budget). Meta donne alors l'argent aux publicités qui marchent le mieux, au lieu de le partager à parts égales.</li>
<li>Choisissez un <b>budget quotidien</b>, calculé avec le module 3.</li>
<li><b>Stratégie d'enchère : volume le plus élevé</b> (sans plafond) pour commencer. Les plafonds de coût sont pour plus tard, quand vous avez des centaines d'achats d'historique.</li></ul>` }
    ],
    retenir: ['Objectif : Ventes, toujours.', 'Budget au niveau de la campagne.', 'Enchère : volume le plus élevé pour commencer.', 'Des noms clairs : Pays · Produit · Type · date.']
  },
  {
    titre: 'Configurer l’ensemble de publicités',
    but: 'Dire à Meta où envoyer les gens, quoi mesurer et qui toucher.',
    sections: [
      { h: 'Conversion', html: `<ul><li><b>Emplacement de la conversion :</b> Site web.</li>
<li><b>Jeu de données (pixel) :</b> celui de la boutique de ce pays.</li>
<li><b>Événement de conversion :</b> Achat.</li>
<li><b>Objectif de performance :</b> maximiser le nombre de conversions.</li>
<li><b>Attribution :</b> laissez le réglage par défaut.</li></ul>
<p><b>Pourquoi « Achat » et pas « Ajout au panier » ?</b> Meta cherche exactement l'action que vous choisissez. Si vous optimisez pour les paniers, vous aurez des paniers.</p>` },
      { h: 'Audience', html: `<ul><li><b>Lieu :</b> uniquement le pays où votre agence livre. Choisissez « Personnes qui vivent dans ce lieu ».</li>
<li><b>Âge :</b> adapté au produit (exemple : 30 ans et plus pour un complément articulaire). Pas trop étroit.</li>
<li><b>Sexe :</b> tous, sauf produit vraiment réservé à un sexe.</li>
<li><b>Ciblage détaillé (centres d'intérêt) :</b> peu ou pas du tout. Laissez Meta élargir (audience Advantage+).</li></ul>
<p><b>Pourquoi si peu de ciblage ?</b> Aujourd'hui, <b>c'est la vidéo qui cible</b>. Une vidéo qui parle de douleurs aux genoux attire les gens qui ont mal aux genoux. Empiler 15 centres d'intérêt rend l'audience petite et chère, sans la rendre meilleure.</p>` },
      { h: 'Emplacements', html: `<p>Gardez les emplacements Advantage+, ou passez en manuel et <b>retirez Audience Network</b> (applications et sites partenaires où beaucoup de clics sont accidentels), ainsi que la <b>colonne de droite</b> et les <b>résultats de recherche</b>.</p>
<p><b>Attention au piège :</b> dans la liste des emplacements, une case <b>cochée</b> veut dire <b>autorisé</b>, une case décochée veut dire exclu.</p>
<p>Ensuite, pour savoir si un emplacement gaspille votre argent : <b>Ventilation → Par diffusion → Emplacement</b>, dans les résultats.</p>` },
      { h: 'Calendrier', html: `<p>Lancez dès que tout est vérifié. Évitez de lancer tard le soir : Meta essaie de dépenser le budget du jour en quelques heures, souvent sur de mauvaises heures.</p>` }
    ],
    retenir: ['Site web + bon pixel + événement Achat.', 'Le pays de livraison uniquement, l’âge adapté, peu d’intérêts.', 'Retirer Audience Network ; une case cochée = autorisé.']
  },
  {
    titre: 'Créer les publicités',
    but: 'Construire 3 à 5 publicités qui attirent des acheteurs sérieux.',
    sections: [
      { h: 'Combien et lesquelles', html: `<p><b>3 à 5 publicités par ensemble, chacune avec une vidéo vraiment différente</b> (angle, accroche ou personne différents). Changer seulement le texte ne suffit pas : c'est la vidéo que Meta et le client regardent.</p>` },
      { h: 'Le format', html: `<ul><li><b>Vidéo verticale 9:16</b> (format Reels et Stories), 20 à 60 secondes. Ajoutez une version 4:5 pour le fil d'actualité si possible.</li>
<li>Sous-titres incrustés : beaucoup de gens regardent sans le son.</li>
<li>Le <b>vrai produit</b> à l'écran, en main, utilisé.</li></ul>` },
      { h: 'La structure d’une vidéo qui vend', html: `<ol><li><b>Accroche (0 à 3 s) :</b> le problème du client, dit avec ses mots. « Vos genoux craquent quand vous montez les escaliers ? »</li>
<li><b>Le problème vécu :</b> ce que ça empêche de faire au quotidien.</li>
<li><b>La solution :</b> le produit, montré, et comment il s'utilise.</li>
<li><b>La preuve :</b> vrais avis, vraies photos de clients, démonstration.</li>
<li><b>L'offre et la sécurité :</b> livraison gratuite, paiement à la livraison.</li>
<li><b>L'appel à l'action :</b> « Commandez maintenant, vous payez seulement à la livraison. »</li></ol>
<p><b>Pourquoi c'est la vidéo qui fait la qualité des commandes ?</b> Une pub qui promet trop attire des curieux qui refusent le colis. Une pub honnête et précise attire moins de monde, mais des gens qui paient.</p>` },
      { h: 'Les textes et le lien', html: `<ul><li><b>Texte principal :</b> 3 à 5 lignes. Problème, bénéfice, paiement à la livraison.</li>
<li><b>Titre :</b> le bénéfice principal en quelques mots.</li>
<li><b>Bouton :</b> « Acheter » ou « Commander ».</li>
<li><b>Lien :</b> directement la page du produit, jamais la page d'accueil.</li>
<li><b>Paramètres d'URL :</b> ajoutez <code>utm_source=facebook&amp;utm_campaign={{campaign.name}}&amp;utm_content={{ad.name}}</code> pour savoir quelle pub amène quelles commandes.</li></ul>
<p>Vérifiez l'aperçu. Si Meta ajoute automatiquement de la musique ou des textes qui dénaturent votre message, désactivez ces options.</p>` }
    ],
    retenir: ['3 à 5 vidéos vraiment différentes par ensemble.', 'Accroche sur le problème dans les 3 premières secondes.', 'Promesse honnête = commandes qui se livrent.', 'Lien vers la page produit + paramètres UTM.']
  },
  {
    titre: 'Lancer, puis ne plus toucher',
    but: 'Laisser Meta apprendre au lieu de casser son travail.',
    sections: [
      { h: 'Le principe', html: `<p>Après le lancement, Meta teste : il montre vos pubs à des profils différents, à des heures différentes. Les premiers jours, les résultats montent et descendent. C'est normal.</p>` },
      { h: 'Ce qui relance l’apprentissage (à éviter)', html: `<ul><li>Changer le budget de plus de 20 % d'un coup.</li>
<li>Modifier le ciblage, les emplacements ou l'événement.</li>
<li>Ajouter ou modifier des publicités tous les jours.</li>
<li>Mettre en pause puis relancer plusieurs fois.</li></ul>
<p>Chaque modification importante remet le compteur à zéro. Vous payez à nouveau la période d'apprentissage.</p>` },
      { h: 'La règle des 3 jours', html: `<p>On ne juge une campagne qu'<b>après 3 jours</b>, ou quand elle a dépensé <b>2 fois votre coût cible par achat</b>. Avant, on regarde, mais on ne touche pas.</p>` }
    ],
    retenir: ['Les premiers jours sont instables, c’est normal.', 'Pas de changement de plus de 20 % du budget d’un coup.', 'On juge après 3 jours ou 2× le coût cible.']
  },
  {
    titre: 'Lire les résultats',
    but: 'Comprendre où se trouve le problème, pour ne pas changer la mauvaise chose.',
    sections: [
      { h: 'Les indicateurs utiles', html: `<table><tr><th>Indicateur</th><th>Ce qu’il mesure</th></tr>
<tr><td>CPM</td><td>Le prix pour 1 000 affichages : le coût pour être vu.</td></tr>
<tr><td>CTR (lien)</td><td>Le pourcentage de gens qui cliquent : la vidéo accroche-t-elle ?</td></tr>
<tr><td>CPC</td><td>Le prix d'un clic.</td></tr>
<tr><td>Taux de conversion de la page</td><td>Commandes ÷ visites : la page convainc-t-elle ?</td></tr>
<tr><td>Coût par achat</td><td>Dépense ÷ achats Meta.</td></tr>
<tr><td>Fréquence</td><td>Combien de fois la même personne voit la pub.</td></tr>
<tr><td><b>Coût par colis livré</b></td><td><b>Dépense ÷ colis livrés : le seul vrai juge.</b></td></tr></table>` },
      { h: 'Le diagnostic', html: `<table><tr><th>Ce que vous voyez</th><th>Où est le problème</th><th>Quoi faire</th></tr>
<tr><td>Peu de clics (CTR lien sous 1 %)</td><td>La vidéo n'accroche pas</td><td>Changer les 3 premières secondes</td></tr>
<tr><td>Beaucoup de clics, peu de commandes (moins de 2 visites sur 100)</td><td>La page, le prix ou l'offre</td><td>Améliorer la page : photos, preuves, clarté du prix</td></tr>
<tr><td>Beaucoup de commandes, peu de livraisons</td><td>Confirmation, agence ou promesse</td><td>Appeler plus vite, changer d'agence, rendre la pub plus honnête</td></tr>
<tr><td>Coût par achat qui monte après 1 à 2 semaines, fréquence au-dessus de 3</td><td>La vidéo est usée</td><td>Ajouter une nouvelle vidéo</td></tr>
<tr><td>CPM très élevé</td><td>Audience trop petite ou vidéo peu engageante</td><td>Élargir l'audience, tester une autre vidéo</td></tr></table>
<p><b>Attention :</b> les « achats » que montre Meta sont des formulaires remplis, pas des colis livrés. Comparez toujours avec le rapport de votre agence.</p>` }
    ],
    retenir: ['Chaque chiffre pointe un endroit précis : vidéo, page ou livraison.', 'On répare l’endroit qui casse, pas tout à la fois.', 'Achats Meta ≠ colis livrés.']
  },
  {
    titre: 'Couper, garder, augmenter',
    but: 'Des règles chiffrées pour décider sans émotion.',
    sections: [
      { h: 'Couper une publicité', html: `<ul><li>Elle a dépensé <b>2 fois le coût cible par achat sans aucun achat</b>.</li>
<li>Ou, après 3 jours, son coût par achat est <b>plus de 1,5 fois le coût cible</b>.</li></ul>` },
      { h: 'Garder', html: `<p>Le coût par achat est autour du coût cible et le taux de livraison tient : <b>on ne touche à rien.</b> Une campagne qui marche se laisse tranquille.</p>` },
      { h: 'Augmenter (le « scaling »)', html: `<ul><li>Conditions : 3 jours dans la cible <b>et</b> un taux de livraison confirmé par l'agence.</li>
<li><b>+20 % du budget tous les 2 à 3 jours</b>, jamais plus d'un coup.</li>
<li>Si les résultats se dégradent après une hausse, revenez au palier précédent et attendez.</li></ul>
<p><b>Pourquoi 20 % ?</b> Au-delà, Meta considère que la campagne a changé et relance l'apprentissage. Vous perdez alors ce qu'il avait appris.</p>` },
      { h: 'Les erreurs qui coûtent le plus cher', html: `<ul><li>Couper à 4 $ dépensés.</li><li>Lancer 8 campagnes en même temps sur le même pays.</li><li>Doubler le budget parce qu'une journée a été bonne.</li><li>Suivre les recommandations « augmentez votre budget » de Meta sans regarder les livraisons.</li><li>Décider après une heure sans commande.</li></ul>` }
    ],
    retenir: ['Couper : 2× le coût cible sans achat, ou plus de 1,5× le coût cible après 3 jours.', 'Augmenter : +20 % tous les 2 à 3 jours, seulement si la livraison suit.', 'Une campagne qui marche, on la laisse tranquille.']
  },
  {
    titre: 'Tester de nouvelles vidéos sans gaspiller',
    but: 'Trouver vos prochaines publicités gagnantes avec un petit budget.',
    sections: [
      { h: 'Pourquoi tester en permanence', html: `<p>Toute vidéo s'use : après quelques semaines, les mêmes personnes l'ont vue plusieurs fois et le coût monte. Il faut toujours une nouvelle vidéo prête à prendre le relais.</p>` },
      { h: 'La méthode', html: `<ol><li>Une <b>campagne test</b> séparée, avec 1 ensemble.</li>
<li><b>2 à 3 nouvelles vidéos</b> par semaine, budget de 5 à 10 $ par jour.</li>
<li>On juge chaque vidéo après <b>3 jours ou environ 10 $</b> dépensés.</li>
<li>Une gagnante passe dans la <b>campagne principale</b> : dupliquez-la en gardant le même identifiant de publication, pour garder les commentaires et les réactions.</li>
<li>Les perdantes sont coupées sans regret.</li></ol>` },
      { h: 'Que tester ?', html: `<p>Testez une seule grande différence à la fois : <b>l'accroche</b> (le problème annoncé), <b>la personne</b> à l'écran, <b>l'angle</b> (douleur, prévention, témoignage, démonstration). Une nouvelle couleur de texte n'est pas un vrai test.</p>` }
    ],
    retenir: ['Une campagne test séparée, 5 à 10 $ par jour.', 'On juge après 3 jours ou 10 $.', 'Les gagnantes vont dans la principale, sans toucher à son budget.']
  },
  {
    titre: 'Des commandes de qualité',
    but: 'Passer de « beaucoup de commandes » à « beaucoup de colis payés ».',
    sections: [
      { h: 'Le principe', html: `<p>Une commande qui n'est pas livrée vous coûte la pub, du temps, et parfois des frais d'agence. Améliorer la qualité des commandes est souvent plus rentable que d'en avoir plus.</p>` },
      { h: 'Les 6 leviers', html: `<ol><li><b>Appeler vite :</b> dans les 15 minutes si possible. Un client appelé le lendemain a souvent changé d'avis.</li>
<li><b>Rappeler les injoignables</b> 3 fois, à des heures différentes, avec un message WhatsApp.</li>
<li><b>Un formulaire sérieux :</b> adresse précise, case de confirmation, une seule commande par personne et par produit.</li>
<li><b>Une pub honnête :</b> montrer le vrai produit, ne pas promettre de miracle.</li>
<li><b>Le prix bien visible sur la page :</b> celui qui commande en connaissant le prix ne sera pas surpris à la livraison.</li>
<li><b>Apprendre à Meta qui sont les vrais acheteurs :</b> au niveau avancé, envoyer l'événement Achat seulement pour les commandes confirmées ou livrées. Meta cherche alors des acheteurs qui paient, pas des remplisseurs de formulaires.</li></ol>` },
      { h: 'Suivre l’agence', html: `<p>Chaque jour : le rapport des livraisons. Chaque semaine : la liste commande par commande (livrée, annulée, injoignable, refusée, en attente). Si la livraison reste sous 40 % pendant une semaine, ce n'est pas un problème de pub : changez de méthode d'appel ou d'agence avant d'ajouter 1 dollar.</p>` }
    ],
    retenir: ['Appeler dans les 15 minutes.', 'Une pub honnête et un prix visible.', 'Livraison sous 40 % pendant une semaine : on règle l’agence avant la pub.']
  },
  {
    titre: 'La routine et la discipline',
    but: 'Un emploi du temps simple qui évite les décisions prises sous le coup de l’émotion.',
    sections: [
      { h: 'Chaque jour', html: `<ul><li><b>Le matin (10 min) :</b> rapport de l'agence, mise à jour des statuts des commandes, relance des abandons.</li>
<li><b>À 13 h (2 min) :</b> on regarde, on ne décide rien.</li>
<li><b>À 20 h (10 min), le seul moment des décisions :</b> on note les chiffres du jour et on applique les règles du module 9.</li></ul>` },
      { h: 'Chaque semaine', html: `<ul><li>Coût par colis livré, pays par pays.</li><li>Taux de livraison de chaque agence.</li><li>Une à trois nouvelles vidéos en test.</li><li>Bilan : où ai-je gagné, où ai-je perdu, quoi changer pour la semaine suivante ?</li></ul>` },
      { h: 'Le mental', html: `<p>Les commandes arrivent par vagues. Une heure sans commande ne veut rien dire. Les décisions prises dans la peur cassent les campagnes qui étaient en train d'apprendre.</p>
<p>Coupez le son de chaque nouvelle commande, regardez vos chiffres à heures fixes, et suivez vos règles écrites même quand vous avez peur. C'est ce qui sépare les e-commerçants qui tiennent de ceux qui abandonnent.</p>` }
    ],
    retenir: ['Décisions à heure fixe, une seule fois par jour.', 'Bilan chaque semaine, pays par pays.', 'Des règles écrites, suivies même quand on a peur.']
  }
  ],

  qcm: [
    { q: 'Quand l’argent arrive-t-il vraiment en paiement à la livraison ?', o: ['Quand le client remplit le formulaire', 'Quand Meta compte un achat', 'Quand le colis est livré et payé', 'Quand l’agence appelle le client'], r: 2, e: 'Une commande est une promesse ; seule la livraison rapporte de l’argent.' },
    { q: 'Prix 16 500, produit 2 600, frais de l’agence 3 000. Quelle est la marge par colis livré ?', o: ['13 900 FCFA', '10 900 FCFA', '16 500 FCFA', '7 900 FCFA'], r: 1, e: '16 500 − 2 600 − 3 000 = 10 900 FCFA.' },
    { q: 'Avec une marge de 18 $ et 50 % de livraison, quel est le coût cible par achat Meta ?', o: ['18 $', '9 $', 'Environ 4,5 $', '1 $'], r: 2, e: '(18 ÷ 2) × 0,5 = 4,5 $.' },
    { q: 'Votre agence livre 1 commande sur 20. Que faites-vous en premier ?', o: ['Augmenter le budget pour avoir plus de commandes', 'Changer toutes les vidéos', 'Régler la livraison avant de dépenser plus en pub', 'Lancer de nouvelles campagnes'], r: 2, e: 'Sous 40 % de livraison, aucune pub ne peut être rentable : on répare la livraison d’abord.' },
    { q: 'Combien de campagnes au maximum par pays et par produit ?', o: ['Une principale + une de test', 'Autant que possible pour tester', 'Huit, puis on coupe à 4 $', 'Une par vidéo'], r: 0, e: 'Plus de campagnes = moins d’apprentissage et une concurrence avec vous-même.' },
    { q: 'Pourquoi couper une campagne à 4 $ dépensés est-il une erreur ?', o: ['Meta rembourse les petites dépenses', 'Avec si peu de données, c’est le hasard qui décide', 'Les campagnes ne commencent qu’après 10 $', 'Ce n’est pas une erreur'], r: 1, e: 'Avec 1 ou 2 achats, on ne peut pas savoir si la pub est bonne ou mauvaise.' },
    { q: 'Combien d’achats par semaine un ensemble doit-il viser pour bien apprendre ?', o: ['5', 'Environ 50', '500', '1'], r: 1, e: 'Environ 50 conversions en 7 jours par ensemble.' },
    { q: 'Quel objectif de campagne choisir pour vendre ?', o: ['Trafic', 'Interactions', 'Notoriété', 'Ventes'], r: 3, e: 'Seul l’objectif Ventes cherche des gens qui commandent.' },
    { q: 'Où régler le budget pour que Meta le donne aux meilleures pubs ?', o: ['Au niveau de la campagne', 'Sur chaque publicité', 'Dans la page Facebook', 'Ça n’a pas d’importance'], r: 0, e: 'Le budget de campagne répartit l’argent vers ce qui marche.' },
    { q: 'Quel événement de conversion choisir dans l’ensemble ?', o: ['Vue de page', 'Ajout au panier', 'Achat', 'Clic'], r: 2, e: 'Meta cherche exactement l’action choisie : choisissez l’achat.' },
    { q: 'Pourquoi mettre peu de centres d’intérêt dans le ciblage ?', o: ['Meta l’interdit', 'Aujourd’hui, c’est surtout la vidéo qui attire les bonnes personnes', 'Les intérêts coûtent plus cher à activer', 'Pour toucher d’autres pays'], r: 1, e: 'La vidéo qui parle du bon problème attire les bonnes personnes.' },
    { q: 'Dans la liste des emplacements, une case cochée veut dire…', o: ['Emplacement exclu', 'Emplacement autorisé', 'Emplacement en test', 'Rien de particulier'], r: 1, e: 'Cochée = autorisée. Décochez Audience Network pour l’exclure.' },
    { q: 'Combien de publicités mettre dans un ensemble ?', o: ['1', '3 à 5 avec des vidéos vraiment différentes', '20 avec le même texte', '50'], r: 1, e: 'Assez pour que Meta choisisse, pas trop pour ne pas disperser.' },
    { q: 'Que doivent montrer les 3 premières secondes d’une vidéo ?', o: ['Le logo de la boutique', 'Le problème du client, dit avec ses mots', 'Le prix', 'Une musique entraînante'], r: 1, e: 'L’accroche sur le problème arrête le bon client.' },
    { q: 'Vous voulez augmenter une campagne qui marche. De combien à la fois ?', o: ['×2 tout de suite', '+20 % tous les 2 à 3 jours', '+100 % chaque matin', 'Ne jamais augmenter'], r: 1, e: 'Au-delà de 20 %, l’apprentissage repart à zéro.' },
    { q: 'Beaucoup de clics mais très peu de commandes : où est le problème ?', o: ['Dans la vidéo', 'Dans la page, le prix ou l’offre', 'Dans le budget', 'Chez l’agence'], r: 1, e: 'Les gens arrivent mais ne sont pas convaincus par la page.' },
    { q: 'Beaucoup de commandes mais peu de livraisons : quoi faire ?', o: ['Doubler le budget', 'Appeler plus vite, vérifier l’agence, rendre la pub plus honnête', 'Changer le pixel', 'Rien, c’est normal'], r: 1, e: 'Le problème est après la commande : confirmation, agence ou promesse.' },
    { q: 'Meta affiche 15 achats et l’agence a livré 1 colis. Quel chiffre suivre ?', o: ['Les 15 achats de Meta', 'Le colis livré, donc le coût par colis livré', 'Le nombre de clics', 'La couverture'], r: 1, e: 'Les « achats » Meta sont des formulaires remplis, pas de l’argent encaissé.' },
    { q: 'Comment tester de nouvelles vidéos sans gaspiller ?', o: ['Les ajouter chaque jour dans la campagne principale', 'Une campagne test à 5–10 $ par jour, jugée après 3 jours ou 10 $', 'Lancer une campagne par vidéo à 50 $', 'Ne jamais tester'], r: 1, e: 'Les tests restent séparés et petits ; les gagnantes passent dans la principale.' },
    { q: 'Une heure sans commande, en pleine journée. Que faites-vous ?', o: ['Je coupe tout', 'Je double le budget', 'Rien : je décide seulement à 20 h, avec mes règles', 'Je relance 5 nouvelles campagnes'], r: 2, e: 'Les commandes arrivent par vagues ; les décisions se prennent à heure fixe.' }
  ]
};
