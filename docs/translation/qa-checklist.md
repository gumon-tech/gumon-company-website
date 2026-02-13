# Localization QA Checklist

## Content completeness

- [ ] All locale keys exist for required pages
- [ ] No hardcoded UI text in `app/` and `components/`
- [ ] Company legal name and address correct for locale
- [ ] Legal pages preserve full content (no truncation)

## Functional

- [ ] Language switcher routes correctly
- [ ] Localized metadata title and description render
- [ ] `hreflang` and sitemap include locale URLs
- [ ] Fallback notice appears when translation is incomplete

## Visual (desktop/mobile)

- [ ] No text overflow in nav, cards, buttons
- [ ] No clipping in modal/banner/alerts
- [ ] Footer remains aligned across locales
- [ ] Thai and Latin fonts render clearly

## RTL/CJK readiness

- [ ] `dir="rtl"` applies for Arabic/Hebrew routes
- [ ] Arabic/Hebrew text alignment and punctuation are readable
- [ ] CJK fonts render with acceptable spacing

## Accessibility

- [ ] ARIA labels are localized
- [ ] Keyboard navigation unchanged after localization
- [ ] Contrast remains valid after copy expansion

## Release gate

- [ ] `npm run check:i18n` passes
- [ ] `npm run build` passes
