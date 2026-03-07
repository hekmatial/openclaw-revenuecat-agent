# X アカウント連携手順

## Step 1: X 新規アカウント作成

1. https://x.com/i/flow/signup で新しいアカウントを作成
2. プロフィールを設定:
   - **名前:** Morgan | AI Dev Advocate
   - **Bio:** AI Developer Advocate | In-app monetization & subscriptions | Autonomous agent powered by Claude | Building with @RevenueCat 🤖
   - **アイコン:** AI/ロボット系のプロフェッショナルな画像

## Step 2: X Developer App 作成

1. https://developer.x.com/en/portal/projects-and-apps にアクセス
2. 新しいプロジェクト & アプリを作成
3. App permissions を **"Read and Write"** に設定
4. **Keys and tokens** タブから取得:
   - API Key (Consumer Key)
   - API Key Secret (Consumer Secret)
   - Bearer Token
   - Access Token (アカウントのもの)
   - Access Token Secret

## Step 3: .env に認証情報を設定

```bash
cp ~/.openclaw/workspace/skills/x-skill/.env.example \
   ~/.openclaw/workspace/skills/x-skill/.env
```

`.env` ファイルを開いて各値を入力:

```
X_BEARER_TOKEN=AAA...
X_API_KEY=BBB...
X_API_KEY_SECRET=CCC...
X_ACCESS_TOKEN=DDD...
X_ACCESS_TOKEN_SECRET=EEE...
```

## Step 4: Python 依存関係インストール

```bash
cd ~/.openclaw/workspace/skills/x-skill
pip install -r requirements.txt
```

## Step 5: 動作確認

```bash
python server.py
# "X-skill MCP server running" のようなログが出ればOK
# Ctrl+C で停止
```

## Step 6: OpenClaw にスキルを登録

`~/.openclaw/openclaw.json` の `plugins.entries` セクションに以下を追加:

```json
"x-skill": {
  "enabled": true,
  "type": "mcp",
  "command": "python",
  "args": ["/Users/niamelo/.openclaw/workspace/skills/x-skill/server.py"]
}
```

その後、OpenClaw を再起動:
```bash
openclaw restart
```

## Step 7: テスト投稿

Morgan (メインセッション) または新しいセッションから:
```
x_get_my_info() を実行してアカウント情報が返ってくるか確認
```

問題なければ:
```
x_post_tweet("Hello from Morgan! AI Developer Advocate, powered by Claude. Excited to talk RevenueCat, in-app purchases, and mobile monetization. 🤖")
```
→ 投稿を確認したら完了。

## Step 8: Cron ジョブを有効化

```bash
openclaw cron list  # 登録済みジョブを確認
openclaw cron run x-morning-tip  # 手動でテスト実行
```

---

## トラブルシューティング

| エラー | 原因 | 対処 |
|---|---|---|
| `401 Unauthorized` | API キーが間違い or 権限不足 | Developer Portal で "Read and Write" を確認 |
| `403 Forbidden` | アプリの権限が "Read Only" | App permissions を変更し Access Token を再生成 |
| `429 Too Many Requests` | レート制限 | `wait_on_rate_limit=True` が有効なので自動待機 |
| `credentials not configured` | .env が未設定 | Step 3 を再確認 |
