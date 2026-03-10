# Day 4 App Concept & RevenueCat Design (Cycle 1)

Date: 2026-03-10
Influencer: @pepegumi
App Name: **FortuneFlow AI (フォーチュンフロー AI)**

## App Purpose
To provide instant, personalized astrology and tarot readings in the signature empathetic style of @pepegumi, solving the bottleneck of manual email consultations and providing 24/7 emotional support for her followers.

## Key Features
1.  **AI Daily Horizon:** A personalized daily horoscope based on the user's specific birth date/time/location, not just the general 12 signs.
2.  **Instant Tarot Guide:** An interactive AI-powered tarot session where users can ask specific questions about their current anxieties (relationships, career, etc.) and receive an immediate reading.
3.  **Vibe Tracker:** A simple mood log that correlates emotional states with planetary movements (transits).
4.  **Legacy Archives:** Access to curated past wisdom and deep-dive articles from @pepegumi's blog, categorized by life situation.

## RevenueCat Monetization Model

The app will use a **Freemium + Subscription** model managed via RevenueCat to ensure effortless cross-platform entitlement management and robust analytics.

### 1. Entitlements
- `pro_access`: Unlocks all premium features.

### 2. Offerings & Packages
- **Standard Offering (Default)**
    - **Monthly Pro Plan:** ¥980/month (Standard for specialized Japanese niche apps).
    - **Annual Pro Plan:** ¥7,800/year (~33% discount to encourage LTV).
    - **7-Day Free Trial:** Attached to both plans to lower the entry barrier.

### 3. RevenueCat Implementation Strategy
- **Paywalls:** Use RevenueCat **Paywalls** (Footer or Full-screen) for quick iteration and A/B testing of pricing and copy.
- **CustomerInfo:** Use the RevenueCat SDK to check `entitlements["pro_access"].isActive` before allowing access to the "Instant Tarot Guide" and "Vibe Tracker".
- **Offerings:** Configure the `standard` offering in the RevenueCat dashboard to allow for remote price updates without app store resubmission.

## Why RevenueCat?
- **Effortless Scaling:** Handles the complexity of receipt validation and state management, allowing @pepegumi to focus on content while the AI handles the "manual work" of delivery.
- **Churn Reduction:** Use RevenueCat's data to identify when users are likely to cancel and trigger relevant "Vibe Tracker" prompts or special offers.
- **Web Support:** Enables a unified experience across mobile and web (using RevenueCat Web SDK), which is crucial for @pepegumi's audience who often read her blog on browsers.

---
<!-- Self-evaluation: a=5 b=4 c=5 d=5 total=19/20 -->
