# API Reference — Pedro Sistema Agente Squad

> Reference documentation for common API patterns, endpoints, and integration standards used across all systems built by this squad.

---

## Authentication Endpoints

### POST /api/auth/login

Authenticate user and return access token.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "secure-password"
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 3600,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user"
  }
}
```

**Error Responses:**
- `401 Unauthorized` — Invalid credentials
- `429 Too Many Requests` — Rate limit exceeded (10 attempts/minute)

### POST /api/auth/refresh

Refresh an expired access token.

**Request:**
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 3600
}
```

### POST /api/auth/logout

Invalidate current session.

**Headers:** `Authorization: Bearer <token>`

**Response (204):** No Content

---

## User Management

### GET /api/users/me

Get current authenticated user profile.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "created_at": "2026-01-15T10:30:00Z",
  "updated_at": "2026-03-20T14:45:00Z"
}
```

### PUT /api/users/me

Update current user profile.

**Request:**
```json
{
  "name": "Jane Doe",
  "avatar_url": "https://storage.example.com/avatars/jane.jpg"
}
```

**Response (200):** Updated user object

---

## AI Agent Endpoints

### POST /api/agents/:id/chat

Send message to AI agent and receive streaming response.

**Headers:** `Authorization: Bearer <token>`

**Request:**
```json
{
  "message": "What's the status of my appointment?",
  "context": {
    "user_id": "uuid",
    "session_id": "session-uuid",
    "metadata": {
      "source": "whatsapp",
      "language": "pt-BR"
    }
  },
  "stream": true
}
```

**Response (200, Server-Sent Events):**
```
data: {"type": "chunk", "content": "Your appointment is"}
data: {"type": "chunk", "content": " scheduled for tomorrow at 3pm."}
data: {"type": "done", "tokens_used": 45}
```

### GET /api/agents/:id/conversations

List conversations for a specific agent.

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `status` (optional): active, resolved, archived

**Response (200):**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "total_pages": 8
  }
}
```

---

## RAG (Retrieval-Augmented Generation)

### POST /api/rag/query

Query the knowledge base with context retrieval.

**Request:**
```json
{
  "query": "How do I reschedule my appointment?",
  "top_k": 5,
  "filters": {
    "category": "appointments",
    "language": "pt-BR"
  }
}
```

**Response (200):**
```json
{
  "answer": "To reschedule your appointment, go to...",
  "sources": [
    {
      "document_id": "doc-123",
      "title": "Appointment Management Guide",
      "relevance_score": 0.95,
      "excerpt": "To reschedule, access your dashboard and..."
    }
  ]
}
```

### POST /api/rag/ingest

Ingest documents into the knowledge base.

**Request:**
```json
{
  "documents": [
    {
      "title": "Company Policies",
      "content": "Full text of the document...",
      "metadata": {
        "category": "policies",
        "version": "2.0",
        "language": "pt-BR"
      }
    }
  ],
  "chunk_size": 500,
  "chunk_overlap": 50
}
```

**Response (201):**
```json
{
  "ingested": 1,
  "chunks_created": 45,
  "document_ids": ["doc-456"]
}
```

---

## WhatsApp Integration

### POST /api/whatsapp/webhook

Webhook endpoint for receiving WhatsApp messages (set up in Meta Developer Console).

**Request (Meta verification):**
```
GET /api/whatsapp/webhook?hub.mode=subscribe&hub.challenge=CHALLENGE&hub.verify_token=TOKEN
```

**Request (Message):**
```json
{
  "object": "whatsapp_business_account",
  "entry": [{
    "changes": [{
      "value": {
        "messaging_product": "whatsapp",
        "metadata": { "phone_number_id": "12345" },
        "contacts": [{ "profile": { "name": "John Doe" }, "wa_id": "5511999999999" }],
        "messages": [{
          "from": "5511999999999",
          "id": "msg-id",
          "timestamp": "1712345678",
          "type": "text",
          "text": { "body": "Hello, I need help" }
        }]
      }
    }]
  }]
}
```

### POST /api/whatsapp/send

Send WhatsApp message via Cloud API.

**Request:**
```json
{
  "to": "5511999999999",
  "type": "text",
  "text": { "body": "Hello! How can I help you?" },
  "messaging_product": "whatsapp"
}
```

---

## Rate Limits

| Endpoint Tier | Rate Limit | Burst |
|---|---|---|
| Auth | 10 req/min | 20 |
| User | 30 req/min | 60 |
| Agent Chat | 20 req/min | 40 |
| RAG Query | 15 req/min | 30 |
| RAG Ingest | 5 req/min | 10 |
| WhatsApp Send | 80 msg/sec (Meta limit) | — |

---

## Error Response Format

All errors follow this structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ],
    "request_id": "req-abc123",
    "timestamp": "2026-04-05T10:30:00Z"
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|---|---|---|
| `AUTH_REQUIRED` | 401 | Authentication token missing |
| `TOKEN_EXPIRED` | 401 | Access token has expired |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Request validation failed |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Unexpected server error |
| `SERVICE_UNAVAILABLE` | 503 | External service unavailable |

---

## Versioning Strategy

- API version is in the URL path: `/api/v1/...`
- Major version bumps for breaking changes
- Minor additions (new fields, new endpoints) are backward compatible
- Deprecated endpoints return `Sunset` header with deprecation date
- Minimum 90-day deprecation notice

---

*Reference document generated by pedro-sistema-agente squad*
*Last updated: 2026-04-05*
