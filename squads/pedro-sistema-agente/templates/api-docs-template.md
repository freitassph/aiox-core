# API Documentation Template
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

# API Documentation

**API:** [API Name]  
**Version:** [Version]  
**Base URL:** `[URL]`  
**Status:** [Live/Beta/Deprecated]

---

## Overview

[Brief description of what this API does]

---

## Authentication

### Method
[Authentication method: JWT, API Key, OAuth, etc.]

### Headers
```
Authorization: Bearer <token>
```

### Getting Credentials
[Instructions for obtaining credentials]

---

## Rate Limiting

| Tier | Requests/Minute | Requests/Day |
|------|-----------------|--------------|
| Free | [X] | [X] |
| Pro | [X] | [X] |
| Enterprise | [X] | [X] |

### Rate Limit Headers
```
X-RateLimit-Limit: [limit]
X-RateLimit-Remaining: [remaining]
X-RateLimit-Reset: [timestamp]
```

---

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": {}
  }
}
```

### HTTP Status Codes
| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

---

## Endpoints

### [Endpoint Category]

#### [Endpoint Name]

`[METHOD] /path/to/endpoint`

[Description of what this endpoint does]

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer <token>
```

**Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| [param] | string | Yes | [Description] |

**Request Body:**
```json
{
  "field": "value"
}
```

**Response (200 OK):**
```json
{
  "data": {
    "id": "123",
    "field": "value"
  }
}
```

**Error Responses:**
| Code | Error | Description |
|------|-------|-------------|
| 400 | INVALID_REQUEST | [Description] |
| 404 | NOT_FOUND | [Description] |

---

## Data Models

### [Model Name]

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier |
| field | type | Yes/No | Description |

---

## Code Examples

### cURL
```bash
curl -X GET https://api.example.com/endpoint \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### JavaScript
```javascript
const response = await fetch('https://api.example.com/endpoint', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
});
const data = await response.json();
```

### Python
```python
import requests

response = requests.get(
    'https://api.example.com/endpoint',
    headers={'Authorization': 'Bearer YOUR_TOKEN'}
)
data = response.json()
```

---

## Webhooks (if applicable)

### Available Events
| Event | Description |
|-------|-------------|
| [event.name] | [Description] |

### Webhook Payload
```json
{
  "event": "event.name",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {}
}
```

### Webhook Signature
[Instructions for verifying webhook signatures]

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | | Initial release |

---

## Support

- **Documentation:** [URL]
- **Email:** [email]
- **Status Page:** [URL]
