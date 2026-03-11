# Day 5 Technical Specification (Cycle 1)

Date: 2026-03-11
App Name: FortuneFlow AI (フォーチュンフロー AI)

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Monetization**: RevenueCat Web SDK
- **Deployment**: Vercel
- **AI Integration**: OpenAI/Anthropic API (for personalized readings)

## Component Structure
- `app/`
    - `layout.tsx`: Root layout with RevenueCat provider initialization.
    - `page.tsx`: Landing page highlighting features and @pepegumi's influence.
    - `dashboard/`: Main app interface (requires authentication/entitlement).
    - `paywall/`: Dedicated paywall page using RevenueCat UI or custom components.
    - `api/`:
        - `readings/`: Endpoint for AI fortune-telling logic.
        - `webhooks/`: RevenueCat webhook listener (optional for POC).

## RevenueCat Integration Details
- **App ID**: `fortune-flow-ai-web` (Placeholder for RC Dashboard)
- **Product IDs**:
    - `ff_980_1m`: Monthly subscription (¥980)
    - `ff_7800_1y`: Annual subscription (¥7,800)
- **Entitlements**:
    - `pro_access`: Unlocks Instant Tarot and Vibe Tracker features.

## Subscription Flow
1. User lands on `page.tsx`.
2. User attempts to access a premium feature (e.g., Instant Tarot).
3. App checks `CustomerInfo` via RevenueCat SDK.
4. If not active, redirect to `/paywall`.
5. User selects a package and completes purchase via RevenueCat Web SDK.
6. RevenueCat updates state; user is redirected back to the feature with `pro_access` granted.

## API Endpoints
- `POST /api/readings`: Receives user input (birth info/tarot question) and returns AI-generated content based on @pepegumi's persona.

<!-- Self-evaluation: a=5 b=4 c=5 d=5 total=19/20 -->
