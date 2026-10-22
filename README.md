# Site Web Officiel — Projet HYCE (ESTACA)

Site web moderne, ultra-rapide, 100% autonome et décarboné pour le **Projet HYCE** (Hydrogen Combustion Engine), conçu par les élèves ingénieurs de l'**ESTACA**.

---

## 🚀 Fonctionnalités & Pages Incluses

1. **Accueil (`index.html`)** : Hero avec photo HD du prototype, badges officiels, chiffres clés animés, comparatif des motorisations (Essence vs Électrique vs Hyce H2), présentation du rétrofit, galerie atelier et sponsors.
2. **Le Projet (`projet.html`)** : Genèse, objectifs sportifs (record Nürburgring), l'école ESTACA et l'association Idrogen, les 4 phases de la roadmap.
3. **L'Équipe (`equipe.html`)** : Trombinoscope complet avec les fiches des membres réparties par pôles d'ingénierie (Moteur, Châssis, Systèmes Embarqués, Sponsoring).
4. **Dossier Hydrogène (`hydrogene.html`)** : Onglets interactifs sur la création par électrolyse, les atouts environnementaux, la sécurité (réservoirs 700 bars, TPRD) et le marché mondial.
5. **Recherches Techniques (`recherches.html`)** : Explications techniques sur le rétrofit 1.8T, gestion du backfire, réduction des NOx, et **centre de téléchargement direct des 6 rapports de recherche PITA en PDF**.
6. **Monde du Sport H2 (`autres-projets.html`)** : Panorama des bolides hydrogène mondiaux (Alpine Alpenglow, Toyota GR Yaris H2, Forze Racing) et différenciation HYCE.
7. **Nos Partenaires (`partenaires.html`)** : Grille des soutiens et sponsors, mécénat (défiscalisation 60%), formulaire direct de demande de partenariat.
8. **Boutique (`boutique.html`)** : Goodies officiels de l'écurie (T-shirts, hoodies, casquettes, stickers) et intégration de don libre HelloAsso (100% gratuit, 0 commission).
9. **Actualités (`blog.html`)** : Journal de bord de l'équipe (prix Grand Challenge L'Usine Nouvelle, avancées de l'atelier).
10. **Contact (`contact.html`)** : Formulaire de contact avec confirmation en direct, adresse du campus ESTACA Laval et liens réseaux sociaux.

---

## 🎨 Charte Graphique Officielle

- **Noir Profond :** `#08090E` / `#000000`
- **Orange HYCE Mécanique :** `#FF5500`
- **Bleu Électrique / H₂ :** `#1010FF` / `#00D4FF`
- **Blanc Pur :** `#FFFFFF`
- **Typographie :** *Poppins* & *Airstrike*

---

## 💻 Tester en Local

Un serveur de développement tourne actuellement sur votre machine :
👉 Ouvrez simplement votre navigateur sur : **[http://localhost:3000](http://localhost:3000)**

Si vous souhaitez le relancer plus tard :
```bash
python -m http.server 3000
```

---

## 🌐 Déploiement 100% Gratuit (0 €)

### Option A — Cloudflare Pages (Recommandée : Illimité & Ultra-rapide)
1. Créez un compte gratuit sur [cloudflare.com](https://www.cloudflare.com).
2. Rendez-vous dans **Workers & Pages** > **Create application** > **Pages**.
3. Choisissez **Upload assets** (glissez simplement tout le contenu de ce dossier).
4. C'est en ligne instantanément !
5. Dans l'onglet **Custom domains**, ajoutez `www.projet-hyce.com` et `projet-hyce.com` (SSL HTTPS automatique et gratuit).

### Option B — Vercel ou Netlify
1. Glissez-déposez le dossier sur [vercel.com](https://vercel.com) ou connectez votre dépôt GitHub.
2. Le site est déployé avec CDN mondial et certificat SSL automatique.

---

## ✉️ Activer l'envoi d'e-mails pour le Formulaire de Contact

Le formulaire de contact utilise le service gratuit **Web3Forms** (jusqu'à 250 e-mails/mois gratuits sans carte bancaire ni serveur).
1. Rendez-vous sur [web3forms.com](https://web3forms.com) et entrez `Projet.hyce@estaca.eu`.
2. Vous recevrez instantanément une clé d'accès par e-mail.
3. Remplacez simplement la valeur `access_key` dans `contact.html` par votre clé.
