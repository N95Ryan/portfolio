# 🏗️ Architecture du Projet Portfolio

## 📁 Structure des Dossiers

```
portfolio/
├── public/                          # Fichiers statiques
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── images/                      # Images du portfolio
│   └── fonts/                       # Polices personnalisées
│
├── src/
│   ├── assets/                      # Assets optimisés par Astro
│   │   ├── images/                  
│   │   └── icons/                   
│   │
│   ├── components/
│   │   ├── common/                  # Composants réutilisables
│   │   │   ├── Button.astro         ✅ Créé
│   │   │   ├── Card.astro           ✅ Créé
│   │   │   └── Container.astro      ✅ Créé
│   │   │
│   │   ├── sections/                # Sections du portfolio
│   │   │   ├── Hero.astro           ⏳ À créer
│   │   │   ├── About.astro          ⏳ À créer
│   │   │   ├── Skills.astro         ⏳ À créer
│   │   │   ├── Experience.astro     ⏳ À créer
│   │   │   ├── Projects.astro       ⏳ À créer
│   │   │   ├── Contact.astro        ⏳ À créer
│   │   │   └── Footer.astro         ✅ Créé
│   │   │
│   │   └── ui/                      # Composants UI
│   │       ├── Navigation.astro     ✅ Créé
│   │       ├── LanguageSwitcher.astro ✅ Créé
│   │       └── SocialLinks.astro    ✅ Créé
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro         ✅ Créé
│   │   └── MainLayout.astro         ✅ Créé
│   │
│   ├── pages/
│   │   ├── index.astro              ✅ Créé (EN)
│   │   └── fr/
│   │       └── index.astro          ✅ Créé (FR)
│   │
│   ├── i18n/                        # Système i18n
│   │   ├── index.ts                 ✅ Créé
│   │   ├── ui.ts                    ✅ Créé
│   │   └── utils.ts                 ✅ Créé
│   │
│   ├── styles/
│   │   ├── global.css               ✅ Créé
│   │   └── animations.css           ✅ Créé
│   │
│   ├── types/                       # Types TypeScript
│   │   ├── index.ts                 ✅ Créé
│   │   └── i18n.ts                  ✅ Créé
│   │
│   ├── utils/                       # Utilitaires
│   │   ├── constants.ts             ✅ Créé
│   │   └── helpers.ts               ✅ Créé
│   │
│   └── data/                        # Données
│       ├── projects.ts              ✅ Créé
│       ├── experience.ts            ✅ Créé
│       ├── skills.ts                ✅ Créé
│       └── socials.ts               ✅ Créé
│
├── astro.config.mjs                 ✅ Configuré
├── tailwind.config.mjs              ✅ Créé
├── tsconfig.json                    ✅ Configuré
└── package.json                     ✅ Prêt
```

## 🎯 Configuration

### TypeScript
- Mode strict activé
- Path aliases configurés (@components, @layouts, @i18n, etc.)
- Types personnalisés pour le portfolio

### Tailwind CSS
- Configuration adaptée de l'ancien portfolio
- Animations personnalisées (ripple)
- Plugin tailwindcss-animated installé
- Gradients personnalisés

### i18n (Internationalisation)
- Langues supportées: EN (défaut), FR
- Routing: `/` pour EN, `/fr` pour FR
- Système de traductions avec types TypeScript
- Utilitaires pour gérer les langues

## 🚀 Commandes

```bash
bun install                # Installer les dépendances
bun run dev                # Démarrer le serveur de développement
bun run build              # Build production
bun run preview            # Prévisualiser le build
```

## 📦 Dépendances à installer

```bash
bun add -D tailwindcss-animated
```

## ✅ Phase 1 : Terminée

- [x] Configuration Tailwind CSS
- [x] Configuration TypeScript strict
- [x] Système i18n complet
- [x] Structure de dossiers
- [x] Layouts de base (BaseLayout, MainLayout)
- [x] Composants UI (Navigation, LanguageSwitcher, SocialLinks)
- [x] Composants communs (Button, Card, Container)
- [x] Footer
- [x] Pages de base (EN + FR)
- [x] Styles globaux et animations
- [x] Types TypeScript
- [x] Fichiers de données

## 📋 Prochaines étapes

### Phase 2 : Sections du Portfolio
- [ ] Hero Section
- [ ] About Section
- [ ] Skills Section
- [ ] Experience Section
- [ ] Projects Section
- [ ] Contact Section

### Phase 3 : Features avancées
- [ ] Animations au scroll
- [ ] Dark mode (optionnel)
- [ ] Formulaire de contact avec Resend
- [ ] Optimisation des images
- [ ] SEO avancé

## 🔧 Notes de développement

### Utilisation des Path Aliases
```typescript
import Button from '@components/common/Button.astro';
import { projects } from '@data/projects';
import { useTranslations } from '@i18n/utils';
```

### Structure d'un composant
```astro
---
// Props TypeScript
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div>
  <!-- HTML -->
</div>

<style>
  /* Styles scoped */
</style>

<script>
  // JavaScript client-side
</script>
```

### Ajout de traductions
Éditer `src/i18n/ui.ts` :
```typescript
export const ui = {
  en: {
    'key': 'English text',
  },
  fr: {
    'key': 'Texte français',
  },
} as const;
```
