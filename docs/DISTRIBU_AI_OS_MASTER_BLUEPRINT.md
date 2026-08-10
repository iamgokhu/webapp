# DistribuAI OS — Complete Project Blueprint

**Save this file as `DISTRIBU_AI_OS_MASTER_BLUEPRINT.md` in your project's `/docs` folder.**

This is the single source of truth for the entire application. It consolidates all architecture decisions, feature specifications, technology choices, build plans, cost analysis, and deployment strategies into one master document.

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Application Overview](#2-application-overview)
3. [Complete Feature Inventory](#3-complete-feature-inventory)
4. [System Architecture](#4-system-architecture)
5. [Technology Stack](#5-technology-stack)
6. [Module Architecture (Lego-Block)](#6-module-architecture)
7. [AI Agent Operating System](#7-ai-agent-operating-system)
8. [Database Schema](#8-database-schema)
9. [Build Phases & Roadmap](#9-build-phases--roadmap)
10. [Cost Analysis](#10-cost-analysis)
11. [Deployment Strategy](#11-deployment-strategy)
12. [Security Architecture](#12-security-architecture)
13. [Monitoring & Operations](#13-monitoring--operations)
14. [Development Workflow](#14-development-workflow)

---

# 1. EXECUTIVE SUMMARY

## What We Are Building

**DistribuAI OS** is an AI-operated business operating system that runs an entire distribution and commerce company — billing, inventory, e-commerce, delivery, HRMS, collections, and fraud prevention — through a hierarchy of AI agents, controlled by a single human owner.

## The Core Innovation

```
TRADITIONAL COMPANY              DISTRIBUTU AI OS
─────────────────────            ─────────────────────
50+ employees                    1 owner (Super Admin)
Manual operations                AI Meta-Agents
Siloed tools                     AI Worker Agents
Reactive management              Modular Platform
                                 Autonomous operations
```

## Current Status

| Metric | Status |
|---|---|
| Platform architecture | Designed & validated |
| Core billing engine | In development (8-second invoice) |
| Module system | 30+ modules specified |
| AI agent framework | Architecture complete |
| Target launch | Phase 1 MVP in 3 months |
| Deployment model | Internal single-company first |

## Scale Targets

| Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Active Customers | 4,000 | 25,000 | 100,000 |
| Staff Users | 75 | 500 | 2,000 |
| Branches | 5 | 25 | 100 |
| Daily Orders | 500 | 5,000 | 50,000 |
| AI Agents Active | 50 | 200 | 1,000 |
| Modules Deployed | 20 | 35 | 50+ |

---

# 2. APPLICATION OVERVIEW

## Platform Mode

```
PLATFORM MODE: INTERNAL_SINGLE_COMPANY
Subscriptions: OFF
Public Signup: Customer + Retail Store only
Staff Users: Created by Admin/Super Admin only
All Features: Unlocked internally
Deployment: Docker Compose first, Kubernetes later
```

## User Types

### Public Users (Self-Register)

- **Customer (B2C)**: Instant OTP signup
- **Retail Store (B2B)**: OTP signup + admin approval workflow

### Internal Users (Admin-Created Only)

- Super Admin / Owner
- Branch Admin
- Accountant
- Salesman
- Delivery Person
- Stock Manager
- HR Manager

## Multi-Channel Apps

| App | Users | Key Features |
|---|---|---|
| Customer App | B2C buyers | Browse, order, pay, track |
| Retailer App | B2B stores | Wholesale catalog, credit, bulk orders |
| Salesman App | Field sales | Orders, collections, beat tracking |
| Delivery App | Drivers | Routes, OTP delivery, cash |
| Branch Admin Panel | Managers | Branch operations, approvals |
| Super Admin Command Center | Owner | Full control, AI agents, analytics |
| Telegram Mini Apps | Customers | In-Telegram commerce |
| WhatsApp Bot | Customers | Conversational ordering |

---

# 3. COMPLETE FEATURE INVENTORY

## 3.1 Core Platform Features

| Feature | Description | Priority |
|---|---|---|
| OTP Authentication | Phone-based login with OTP | P0 |
| Multi-Tenant Architecture | Isolated data per business | P0 |
| Role-Based Access Control | Owner, Admin, Salesman, Delivery, Customer | P0 |
| Module Registry | Install/enable/disable/delete modules | P0 |
| Event Bus | Inter-module communication | P0 |
| Audit Trail | Every action logged immutably | P0 |
| Sync Engine | Offline-first with background sync | P0 |
| Notification Hub | In-app, push, WhatsApp, SMS, email | P0 |

## 3.2 Distribution & Billing Module

| Feature | Description | Priority |
|---|---|---|
| 8-Second Invoice Creation | Fastest billing flow in market | P0 |
| GST Auto-Calculation | HSN-based tax computation | P0 |
| e-Invoice Generation | IRN via GSP integration | P1 |
| e-Way Bill Generation | For goods movement > ₹50K | P1 |
| Quotation / Proforma / Challan | Multiple document types | P1 |
| Credit Note / Debit Note | With approval workflow | P1 |
| Multi-Godown Inventory | Track stock across locations | P1 |
| Batch & Expiry Tracking | FEFO inventory management | P1 |
| Purchase OCR | Scan paper bills → auto-entry | P2 |
| Item Library (50K+ SKUs) | Pre-loaded Indian product database | P1 |
| Barcode Generation & Scanning | Label printing + camera scan | P1 |

## 3.3 Order Control & Pricing Engine

| Feature | Description | Priority |
|---|---|---|
| Central Order Validation | Single authority for all channels | P0 |
| Available-to-Sell Calculation | Physical - Reserved - Blocked - Safety | P0 |
| Hierarchical Product Blocking | Global → Category → Brand → SKU → Channel | P0 |
| Channel-Specific Controls | Block AI/Phone/B2C while allowing Salesman | P0 |
| Price Spike Protection | Alert on purchase price increase > X% | P1 |
| Margin Protection | Block orders below minimum margin | P1 |
| Commercial Control Center | Owner dashboard for all toggles | P0 |
| Next-Day Bulk Billing | Generate all route invoices in one click | P1 |

## 3.4 Payment & Financial Module

| Feature | Description | Priority |
|---|---|---|
| Payment In / Out | Cash, Bank, UPI, Cheque, NEFT/RTGS | P0 |
| Auto Invoice Matching | Oldest-first settlement | P0 |
| Cheque Tracking | Issued → Deposited → Cleared / Bounced | P1 |
| Bank Reconciliation | Upload statement → AI matching | P2 |
| UTR Verification | Multi-factor payment confirmation | P1 |
| Payment Screenshot OCR | Extract UTR, amount, date from image | P1 |
| Ledger & Aging | Party-wise balance tracking | P0 |

## 3.5 E-Commerce Module (B2C + B2B)

| Feature | Description | Priority |
|---|---|---|
| Geo-Based Hub Routing | Pincode → nearest branch | P0 |
| Dual Catalog View | B2C retail vs B2B wholesale | P0 |
| B2B Approval Workflow | GST + shop photo + field verification | P0 |
| B2C Customer Tiers | Economy, Premium, Elite, Diamond | P1 |
| B2B Business Types | Shop, Supermarket, Wholesale, Canteen, Infra | P0 |
| B2B Volume Tiers | Bronze, Silver, Gold, Platinum, Diamond | P1 |
| Dynamic Pricing Engine | Location + tier + channel based | P0 |
| Branch-Level CMS | Banners, carousels, promotions per branch | P1 |

## 3.6 Delivery & Logistics Module

| Feature | Description | Priority |
|---|---|---|
| Delivery Trip Management | Assign orders to drivers | P0 |
| Route Planning | Optimized multi-stop routes | P1 |
| OTP Delivery Confirmation | Customer OTP verification | P0 |
| Proof of Delivery | Photo + signature + GPS | P0 |
| Cash Collection at Delivery | COD with denomination tracking | P0 |
| Delivery Status Tracking | Real-time for customer | P1 |

## 3.7 HRMS & Attendance Module

| Feature | Description | Priority |
|---|---|---|
| Employee Profiles | Personal, job, bank, documents | P0 |
| GPS Attendance | Geofence-based check-in/out | P0 |
| Selfie Verification | Face match + liveness detection | P1 |
| Branch Geofence | 100m radius verification | P0 |
| Leave Management | Apply → approve → deduct | P1 |
| Salary Processing | PF, ESI, PT, overtime | P2 |
| Anti-Fake-GPS Detection | Mock location detection | P0 |

## 3.8 Field Intelligence Module

| Feature | Description | Priority |
|---|---|---|
| Beat / Route Tracking | Salesman daily route mapping | P0 |
| Retailer Geofence | Entry/exit detection per outlet | P0 |
| 15-Minute Stay Detection | Configurable outlet visit timer | P1 |
| Idle Time Alerts | Unscheduled stop detection | P1 |
| Travel Distance Tracking | KM traveled per day | P1 |
| Route Deviation Alerts | Unplanned route changes | P2 |

## 3.9 AI Trust & Fraud Detection Module

| Feature | Description | Priority |
|---|---|---|
| GPS Spoof Detection | Mock location, emulator detection | P0 |
| Device Integrity Check | Rooted/jailbroken detection | P1 |
| Payment Screenshot Fraud | OCR + bank statement matching | P0 |
| UTR Duplicate Detection | Prevent reuse of transaction IDs | P0 |
| Cash Denomination Mismatch | Collection vs deposit comparison | P0 |
| Return Stock Mismatch | Bill vs physical count verification | P1 |
| Unified Risk Score | 0-100 scoring across all signals | P0 |

## 3.10 AI Agent Operating System

| Feature | Description | Priority |
|---|---|---|
| Master Meta-Agent | Orchestrates all AI operations | P0 |
| Business Meta-Agent | Sales, delivery, collection agents | P0 |
| Engineering Meta-Agent | Build, test, deploy agents | P1 |
| Operations Meta-Agent | Monitor, alert, heal agents | P0 |
| Agent Manifest System | JSON-based agent configuration | P0 |
| Agent Pools | Auto-scaling worker pools | P1 |
| Dynamic Agent Creation | Spawn agents on-demand | P1 |
| Agent Budget Controls | Daily token/cost limits | P0 |

## 3.11 AI Business Agents

| Feature | Description | Priority |
|---|---|---|
| Sales AI | Order taking via chat/voice | P0 |
| Phone AI | Voice-based order taking | P1 |
| WhatsApp AI | WhatsApp order + support bot | P0 |
| Collection AI | Payment reminder automation | P1 |
| Inventory AI | Reorder prediction, stock-out alerts | P1 |
| Recommendation AI | Cross-sell, upsell, new product launch | P1 |
| Fraud Detection AI | Anomaly detection across all signals | P0 |

## 3.12 Recommendation & Campaign Engine

| Feature | Description | Priority |
|---|---|---|
| New Product Launch Campaigns | Target audience identification | P1 |
| Scheme Recommendations | Best scheme per customer/cart | P1 |
| Best Discount Engine | Optimal discount without margin loss | P1 |
| Near-Expiry Clearance | Auto-campaign for expiring stock | P1 |
| High-Margin Product Push | Promote profitable items | P1 |
| Autopilot Mode | AI creates + runs campaigns | P2 |
| Assisted Mode | AI drafts, human approves | P1 |
| Manual Mode | Human creates everything | P0 |

## 3.13 Telegram Platform Module

| Feature | Description | Priority |
|---|---|---|
| Multi-Bot Manager | Create/deploy/pause/stop bots | P1 |
| Telegram Mini Apps | In-Telegram web applications | P1 |
| Command Manager | Configurable bot commands | P1 |
| Broadcast Manager | Bulk announcements | P2 |
| Template Manager | Message templates | P1 |
| AI Chat Integration | Connect to AI orchestrator | P1 |

## 3.14 Digital Services Module

| Feature | Description | Priority |
|---|---|---|
| Digital Sevai | PAN, passport, certificates, bill pay | P2 |
| Insurance Leads | Lead capture + commission tracking | P2 |
| Loan Leads | NBFC integration + tracking | P2 |
| Manpower Services | Worker booking + assignment | P2 |
| Document Vault | Secure document storage | P2 |

## 3.15 Reporting & Analytics Module

| Feature | Description | Priority |
|---|---|---|
| 25+ Standard Reports | Sales, purchase, GST, stock, party | P0 |
| GSTR-1 / 2 / 3B Generation | JSON export for portal | P0 |
| Trial Balance | For CA | P1 |
| Profit & Loss | Revenue - expenses | P1 |
| Cash Flow | Money in vs out | P1 |
| Party Aging | Overdue by days | P0 |
| Stock Valuation | FIFO / weighted average | P1 |
| Custom Report Builder | Drag-drop report creation | P2 |
| Auto-Email Reports | Scheduled delivery to CA/owner | P1 |

## 3.16 Notification & Communication Module

| Feature | Description | Priority |
|---|---|---|
| In-App Message Center | Inbox with categories | P0 |
| Push Notifications | FCM / APNs | P0 |
| WhatsApp Notifications | Via WhatsApp Business API | P0 |
| SMS Fallback | For critical alerts | P1 |
| Email Notifications | Invoices, reports, alerts | P1 |
| Flash Notifications | High-priority temporary alerts | P1 |
| Notification Preferences | Per-user channel control | P0 |
| Message Templates | Multilingual, variable-based | P0 |
| Delivery/Read Tracking | Status per message | P1 |

## 3.17 Super Admin Command Center

| Feature | Description | Priority |
|---|---|---|
| Module Marketplace | Install/enable/disable modules | P0 |
| Agent Control Center | Deploy/pause/retire agents | P0 |
| Commercial Control Center | Global billing/order toggles | P0 |
| Exception Alert Center | All fraud/risk alerts | P0 |
| Approval Queue | Credit notes, replacements, price changes | P0 |
| Cost Intelligence | AI + cloud cost tracking | P1 |
| SLA Dashboard | Per-module uptime tracking | P1 |
| Compliance Status | GST, DPDP, labour law | P1 |
| System Health | Real-time monitoring | P0 |
| Audit Log Viewer | Searchable, filterable | P0 |

---

# 4. SYSTEM ARCHITECTURE

## High-Level Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                         CLIENT APPS                              │
│                                                                  │
│ Customer Web App      Retailer Web App      Super Admin Web      │
│ Branch Admin Web      Salesman Mobile       Delivery Mobile      │
│ Telegram Mini Apps    WhatsApp Bot          Phone AI             │
└────────────────────────────┬─────────────────────────────────────┘
                             │ HTTPS / WSS
┌────────────────────────────▼─────────────────────────────────────┐
│                      EDGE / API GATEWAY                          │
│                                                                  │
│ Cloudflare WAF / CDN                                             │
│ SSL Termination                                                  │
│ Rate Limiting                                                    │
│ Request Routing                                                  │
└────────────────────────────┬─────────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────────┐
│                      APPLICATION SERVICES                        │
│                                                                  │
│ FastAPI Core API                                                 │
│ ├── Order Control Engine                                         │
│ ├── Billing Engine                                               │
│ ├── Inventory Engine                                             │
│ ├── Payment Engine                                               │
│ ├── User / Role / Branch Engine                                  │
│ ├── Module Registry                                              │
│ └── Approval Workflow Engine                                     │
│                                                                  │
│ Node.js Realtime Gateway                                         │
│ ├── WebSocket                                                    │
│ ├── Live notifications                                           │
│ ├── Dashboard updates                                            │
│ └── Agent event streaming                                        │
│                                                                  │
│ AI Orchestrator Service                                          │
│ ├── Agent router                                                 │
│ ├── Tool calling                                                 │
│ ├── Memory                                                       │
│ └── Approval guardrails                                          │
│                                                                  │
│ OCR / Vision Worker                                              │
│ WhatsApp / SMS / Email Worker                                    │
│ Telephony / Voice Worker                                         │
│ Report / Export Worker                                           │
│ Sync / Offline Worker                                            │
└────────────────────────────┬─────────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────────┐
│                         DATA LAYER                               │
│                                                                  │
│ PostgreSQL + PostGIS + pgvector                                  │
│ Redis                                                            │
│ Meilisearch                                                      │
│ S3 / Object Storage                                              │
│ Event Bus: Redis Streams → Kafka later                           │
└────────────────────────────┬─────────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────────┐
│                      OBSERVABILITY & SECURITY                    │
│                                                                  │
│ Grafana + Prometheus + Loki                                      │
│ Sentry                                                           │
│ OpenTelemetry                                                    │
│ Audit Log                                                        │
│ Backup / Restore                                                 │
│ Secrets Manager                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Architectural Principles

1. **Modular monolith first, microservices later**
2. **TypeScript + Python only** — No extra languages
3. **PostgreSQL as the primary database**
4. **Redis for cache, OTP, sessions, queues**
5. **Event-driven module communication**
6. **Offline-first mobile apps**
7. **AI behind APIs, never directly trusted for financial actions**
8. **Everything observable**
9. **Everything auditable**
10. **Keep infrastructure boring and reliable**

---

# 5. TECHNOLOGY STACK

## 5.1 Frontend Web Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Next.js 14 App Router** | Web apps, SSR, routing |
| Language | **TypeScript** | Type safety |
| UI Library | **React 18+** | Components |
| Design System | **shadcn/ui + Radix UI** | Accessible components |
| Styling | **Tailwind CSS** | Utility-first CSS |
| State Management | **Zustand** | Lightweight app state |
| Server State | **TanStack Query** | API caching, sync |
| Forms | **React Hook Form** | Performant forms |
| Validation | **Zod** | Schema validation |
| Charts | **Recharts / ECharts** | Reports and dashboards |
| Tables | **TanStack Table** | Data grids |
| Maps | **Leaflet + OpenStreetMap** | Branch, route, geofence maps |
| Icons | **Lucide React** | Icons |
| i18n | **react-i18next** | English, Hindi, Tamil, Gujarati |
| PDF Viewer | **react-pdf** | Invoice preview |
| Date Handling | **date-fns** | Dates, due dates |
| Rich Text | **TipTap** | Notes, templates |
| Drag & Drop | **dnd-kit** | Dashboard customization |

## 5.2 Mobile App Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **React Native + Expo** | Android/iOS apps |
| Language | **TypeScript** | Type safety |
| Navigation | **Expo Router** | File-based routing |
| Offline DB | **WatermelonDB** or **SQLite** | Offline-first storage |
| State | **Zustand** | Local state |
| API | **TanStack Query** | Sync/cache |
| Camera | **expo-camera** | OCR, selfie, proof |
| Location | **expo-location** | GPS, geofence |
| Background Tasks | **expo-task-manager** | GPS sync, offline sync |
| Notifications | **expo-notifications + FCM** | Push alerts |
| Barcode | **expo-barcode-scanner** | Item scanning |
| Biometrics | **expo-local-authentication** | App lock |
| Secure Storage | **expo-secure-store** | Tokens |
| File System | **expo-file-system** | Downloads, proofs |
| Maps | **MapmyIndia SDK** or **Google Maps SDK** | Routes |
| Deep Links | **expo-linking** | WhatsApp/notification links |

## 5.3 Backend Stack

### Primary Backend

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **FastAPI** | Core business APIs |
| Language | **Python 3.12** | Business logic, AI |
| ORM | **SQLAlchemy 2** | Database access |
| Migrations | **Alembic** | Schema migrations |
| Validation | **Pydantic v2** | Request/response schemas |
| Auth | **JWT + OTP** | Sessions and tokens |
| Background Jobs | **Celery + Redis** | Async workers |
| API Docs | **OpenAPI / Swagger** | API documentation |

### Realtime / Notification Gateway

| Layer | Technology | Purpose |
|---|---|---|
| Runtime | **Node.js 20+** | WebSocket gateway |
| Framework | **Fastify** or **NestJS** | Realtime API |
| WebSocket | **[Socket.IO](http://Socket.IO)** | Live updates |
| Queue Consumer | **BullMQ** | Notification jobs |
| Push | **Firebase Admin SDK** | FCM push |

## 5.4 Database Stack

| Component | Technology | Purpose |
|---|---|---|
| RDBMS | **PostgreSQL 16** | Core data |
| Geo Extension | **PostGIS** | Geofence, routes, branch radius |
| Vector Extension | **pgvector** | AI memory, semantic search |
| Connection Pool | **PgBouncer** | Connection management |
| Read Replicas | PostgreSQL streaming replication | Reports and analytics |

## 5.5 Event Bus & Async Stack

| Layer | Technology | Purpose |
|---|---|---|
| Start With | **Redis Streams** | Simple event bus |
| Scale Later | **Apache Kafka** | High throughput events |
| Job Queue | **Celery** for Python | AI, OCR, reports |
| Job Queue | **BullMQ** for Node | Notifications, realtime |
| Scheduler | **Celery Beat** | Reminders, reports, alerts |
| Dead Letter Queue | Redis/Kafka DLQ | Failed jobs |

## 5.6 Search Stack

| Layer | Technology | Purpose |
|---|---|---|
| Search Engine | **Meilisearch** | Fast product/party search |
| Sync | Worker listens to DB events | Keeps index updated |
| Fallback | PostgreSQL `tsvector` | Basic search if Meilisearch down |

## 5.7 AI Stack

| Purpose | Primary | Fallback |
|---|---|---|
| Conversation / Business AI | **Claude API** | GPT-4o |
| OCR / Vision | **Claude Vision** | GPT-4o Vision |
| Speech-to-Text | **Whisper** | Google Speech-to-Text |
| Text-to-Speech | **ElevenLabs** or **AWS Polly** | Google TTS |
| Embeddings | **OpenAI embeddings** | pgvector local embeddings |
| Recommendations | Custom rules + LLM | Rule-based fallback |
| Fraud Detection | Custom scoring + AI anomaly detection | Rule-based |

## 5.8 Integration Stack

| Service | Provider | Purpose |
|---|---|---|
| WhatsApp Business API | **Gupshup / WATI** | Orders, invoices, OTP, reminders |
| SMS | **MSG91** | OTP, critical alerts |
| Email | **Resend / AWS SES** | Reports, invoices, admin alerts |
| Push | **Firebase Cloud Messaging** | Mobile notifications |
| Telegram | **Telegram Bot API** | Mini apps, bots, alerts |
| UPI / Cards / Netbanking | **Razorpay** | Payments |
| GSTIN validation | Government API / GSP | Compliance |
| e-Invoice / IRN | **ClearTax / Masters India** | GST compliance |
| Maps / Geocoding | **MapmyIndia** preferred | Geofencing, routing |
| Voice calls | **Exotel / Twilio / Kaleyra** | Phone AI, IVR |

## 5.9 Infrastructure & DevOps Stack

| Component | Technology |
|---|---|
| Cloud | **AWS Mumbai** or **DigitalOcean Bangalore** |
| Containers | **Docker** |
| Orchestration | **Docker Compose** initially, **Kubernetes** later |
| CI/CD | **GitHub Actions** |
| CDN / WAF | **Cloudflare** |
| Object Storage | **AWS S3** or **Cloudflare R2** |
| DNS | Cloudflare DNS |
| SSL | Cloudflare / Let's Encrypt |
| Secrets | AWS Secrets Manager / Vault |
| Backup | Automated pg_dump + WAL + S3 |

## 5.10 Monitoring & Observability Stack

| Layer | Technology |
|---|---|
| Metrics | **Prometheus** |
| Dashboards | **Grafana** |
| Logs | **Loki** or CloudWatch |
| Traces | **OpenTelemetry + Tempo** |
| Error Tracking | **Sentry** |
| Uptime | **UptimeRobot / Better Stack** |
| Alerting | Grafana Alerting + Slack/Telegram |
| Audit | Internal audit_logs |
| AI cost tracking | Custom cost dashboard |

---

# 6. MODULE ARCHITECTURE (LEGO-BLOCK)

## 6.1 Core Principles

```
1. Every feature is a module.
2. Every module has a manifest.
3. Every module can be enabled or disabled.
4. Every module owns its data.
5. Every module communicates through events/APIs.
6. Every module has health checks.
7. Every module has permissions.
8. Every module has tests.
9. Every module can fail safely.
10. Every module can be added later without rebuilding the app.
```

## 6.2 Module Categories

### Core Platform Modules (Always Installed)

- `core-auth` — OTP login, tokens, sessions, 2FA
- `core-tenant` — Businesses, tenants, branches
- `core-users` — Users, staff, roles
- `core-permissions` — Role-based permissions
- `core-module-registry` — Install, enable, disable modules
- `core-feature-flags` — Tenant/branch/app-level feature control
- `core-event-bus` — Async module communication
- `core-command-bus` — Reliable actions
- `core-notifications` — WhatsApp, SMS, email, push
- `core-storage` — Files, images, PDFs, documents
- `core-audit` — Audit logs
- `core-settings` — Business settings, module settings
- `core-i18n` — English, Hindi, Tamil, Gujarati, Hinglish
- `core-search` — Product, party, invoice search
- `core-scheduler` — Cron jobs, reminders, reports

### Business Modules

- `parties` — B2B/B2C customer & supplier management
- `items` — Multi-godown stock, batch, expiry tracking
- `inventory` — Stock movements, adjustments, reservations
- `order-control` — Central validation, cart, reservation
- `billing` — 8-second GST invoicing, e-Invoice, e-Way
- `payments` — UTR matching, cash denomination, ledger
- `ecommerce` — B2C storefront, geo-hub routing
- `b2b-commerce` — Wholesale catalog, credit limits, bulk schemes
- `delivery` — Route optimization, OTP proof, cash collection
- `hrms` — Employee profiles, attendance, payroll
- `attendance` — GPS geofence, selfie verification
- `field-intelligence` — Route mapping, 15-min stay detection, idle alerts
- `reports` — 25+ reports, GST compliance, analytics
- `notifications` — In-app, push, WhatsApp, SMS, email

### AI Modules

- `ai-orchestrator` — Meta-agent routing, tool calling
- `ai-recommendations` — Autopilot campaigns, next-best-action
- `ai-whatsapp` — WhatsApp order taking, support, OTP
- `ai-phone` — Voice-based ordering and support
- `ai-ocr` — Purchase scanning, payment verification
- `ai-fraud` — GPS spoof, UTR matching, cash OCR, return verification
- `ai-agents` — Agent operating system, pools, budgets

### Integration Modules

- `telegram-platform` — Multi-bot manager, mini apps, broadcasts
- `digital-services` — Sevai, insurance, loans, manpower
- `compliance` — GST, DPDP, RBI, labour law

## 6.3 Module Manifest Structure

```json
{
  "id": "billing",
  "name": "Billing & Invoicing",
  "version": "1.0.0",
  "status": "ACTIVE",
  "description": "8-second GST invoice creation with e-Invoice support",
  "dependencies": [
    "core-auth",
    "parties",
    "items",
    "inventory",
    "payments"
  ],
  "optionalDependencies": [
    "ai-ocr",
    "compliance"
  ],
  "permissions": [
    "billing.view",
    "billing.create",
    "billing.edit",
    "billing.delete",
    "billing.share",
    "billing.einvoice.generate"
  ],
  "routes": [
    "/billing",
    "/billing/new",
    "/billing/:id"
  ],
  "apiRoutes": [
    "/api/v1/billing/*"
  ],
  "eventsEmitted": [
    "invoice.created",
    "invoice.shared",
    "invoice.paid",
    "invoice.cancelled"
  ],
  "eventsConsumed": [
    "payment.received",
    "order.confirmed",
    "party.updated"
  ],
  "dashboardWidgets": [
    "billing.today-invoices",
    "billing.pending-payments"
  ],
  "settings": [
    "billing_invoice_prefix",
    "billing_invoice_starting_number",
    "billing_default_theme",
    "billing_einvoice_enabled"
  ],
  "healthCheck": "/api/v1/billing/health",
  "migrations": [
    "migrations/001_create_invoices.sql",
    "migrations/002_add_einvoice_fields.sql"
  ]
}
```

## 6.4 Module Lifecycle

```
DISCOVERED
   ↓
INSTALLED
   ↓
ENABLED
   ↓
RUNNING
   ↓
DISABLED
   ↓
ARCHIVED
   ↓
UNINSTALLED
```

## 6.5 Module Marketplace UI

```
MODULE MARKETPLACE
Core
  Authentication             ● Enabled
  Roles & Permissions        ● Enabled
  Module Registry            ● Enabled
Commerce
  Parties                    ● Enabled
  Items                      ● Enabled
  Inventory                  ● Enabled
  Billing                    ● Enabled
  Payments                   ● Enabled
  GST Compliance             ● Enabled
  E-commerce                 ● Enabled
  Geo Pricing                ● Enabled
  Branch CMS                 ● Enabled
  B2B Onboarding             ● Enabled
Workforce
  HRMS                       ● Enabled
  Attendance                 ● Enabled
  Payroll                    ○ Disabled
Services
  Digital Sevai              ● Enabled
  Insurance                  ○ Disabled
  Loans                      ○ Disabled
  Manpower                   ○ Disabled
AI
  WhatsApp AI                ● Enabled
  OCR                        ● Enabled
  Phone AI                   ○ Disabled
  Copilot                    ● Enabled
Operations
  Monitoring                 ● Enabled
  Backup                     ● Enabled
  Audit Logs                 ● Enabled
```

---

# 7. AI AGENT OPERATING SYSTEM

## 7.1 Agent Hierarchy

```
LEVEL 0: SUPER ADMIN (Human)
  │
  ▼
LEVEL 1: MASTER META-AGENT
  │
  ├── LEVEL 2: BUSINESS META-AGENT
  │     ├── Sales Meta-Agent
  │     │     ├── Order Agent
  │     │     ├── Customer Agent
  │     │     ├── Forecast Agent
  │     │     └── Recommendation Agent
  │     ├── Delivery Meta-Agent
  │     │     ├── Route Agent
  │     │     ├── GPS Agent
  │     │     ├── OTP Agent
  │     │     └── Cash Collection Agent
  │     ├── Collection Meta-Agent
  │     │     ├── Payment Agent
  │     │     ├── Credit Agent
  │     │     └── Reminder Agent
  │     └── Marketing Meta-Agent
  │           ├── Campaign Agent
  │           ├── Pricing Agent
  │           └── Promotion Agent
  │
  ├── LEVEL 2: ENGINEERING META-AGENT
  │     ├── Frontend Agent
  │     ├── Backend Agent
  │     ├── Database Agent
  │     ├── API Agent
  │     ├── Module Agent
  │     ├── Testing Agent
  │     ├── Security Agent
  │     └── Performance Agent
  │
  └── LEVEL 2: OPERATIONS META-AGENT
        ├── Deployment Agent
        ├── Monitoring Agent
        ├── Log Analysis Agent
        ├── Incident Agent
        ├── Recovery Agent
        ├── Backup Agent
        └── Cost Optimization Agent
```

## 7.2 Transaction Authority Matrix

| Transaction | Customer | Salesman | Sales AI | Phone AI | Branch Admin | Super Admin | Owner |
|---|---|---|---|---|---|---|---|
| Sales Order | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sales Invoice | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Sales Return Request | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sales Return Processing | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Replacement Request | 🔵 | 🔵 | 🔵 | 🔵 | 🟢 Create | ✅ Approve | ✅ Approve |
| Replacement Order | ❌ | ❌ | ❌ | ❌ | 🟢 Create | ✅ Approve | ✅ Approve |
| Credit Note Request | 🔵 | 🔵 | 🔵 | 🔵 | 🟢 Create | ✅ Approve | ✅ Approve |
| Credit Note Posting | ❌ | ❌ | ❌ | ❌ | 🟢 Create | ✅ Approve | ✅ Approve |
| Debit Note | ❌ | ❌ | ❌ | ❌ | 🟢 Create | ✅ Approve | ✅ Approve |
| Price Override | ❌ | ❌ | ❌ | ❌ | Limited | ✅ | ✅ |
| Discount Override | ❌ | ❌ | ❌ | ❌ | Limited | ✅ | ✅ |
| Scheme Creation | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Global Billing Stop | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Global Order Stop | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Module Deploy | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Module Delete | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Agent Deploy | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Agent Delete | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Data Export | ❌ | ❌ | ❌ | ❌ | Limited | ✅ | ✅ |
| Data Deletion | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Config Change (Global) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Config Change (Branch) | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |

🔵 = Can request/initiate only
🟢 = Can create/prepare
✅ = Can approve/execute

## 7.3 AI Agent Guardrails

```
AI cannot independently:
├── Create credit notes
├── Approve credit notes
├── Create replacements
├── Approve replacements
├── Change pricing without approval
├── Override inventory controls
├── Bypass order control engine
└── Post financial entries directly
```

## 7.4 Agent Budget Controls

```
Every agent gets:
├── Max tokens/day
├── Max API cost/day
├── Max execution time
├── Max concurrent jobs
├── Max database queries
└── Max tool calls

Example:
MARKET ANALYSIS AGENT
Daily budget: ₹500
Current:      ₹182
Jobs:         42
Remaining:    ₹318

If budget exceeded:
→ Pause
→ Notify Meta-Agent
```

---

# 8. DATABASE SCHEMA

## 8.1 Core Tables

```sql
-- Branches
CREATE TABLE branches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL,
  address TEXT,
  pincode VARCHAR(6),
  latitude DECIMAL,
  longitude DECIMAL,
  geofence_radius_meters INT DEFAULT 100,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(200) NOT NULL,
  mobile VARCHAR(15) UNIQUE NOT NULL,
  email VARCHAR(200),
  photo_url TEXT,
  user_source VARCHAR(20) NOT NULL,        -- 'admin_created' or 'public_signup'
  user_type VARCHAR(20) NOT NULL,          -- 'staff', 'customer', 'retailer'
  role VARCHAR(30),
  branch_id UUID REFERENCES branches(id),
  status VARCHAR(20) DEFAULT 'INVITED',    -- INVITED, ACTIVE, DISABLED, ARCHIVED
  invite_token_hash TEXT,
  invite_expires_at TIMESTAMP,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Modules
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  version VARCHAR(50) NOT NULL,
  status VARCHAR(30) NOT NULL,             -- ACTIVE, DISABLED, DEPRECATED
  manifest JSONB,
  installed_at TIMESTAMP,
  enabled_at TIMESTAMP
);

-- Audit Logs
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),
  entity_id UUID,
  before_value JSONB,
  after_value JSONB,
  ip_address INET,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Events
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type VARCHAR(200) NOT NULL,
  module_code VARCHAR(100),
  payload JSONB,
  status VARCHAR(30) DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP
);
```

## 8.2 Module-Owned Tables

### Billing

```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  party_id UUID REFERENCES parties(id),
  branch_id UUID REFERENCES branches(id),
  order_id UUID REFERENCES orders(id),
  subtotal DECIMAL(12,2),
  discount DECIMAL(12,2),
  tax_amount DECIMAL(12,2),
  grand_total DECIMAL(12,2),
  due_date DATE,
  status VARCHAR(30),                      -- DRAFT, CONFIRMED, PAID, OVERDUE, CANCELLED
  pdf_url TEXT,
  einvoice_irn TEXT,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE invoice_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_id UUID REFERENCES invoices(id),
  item_id UUID REFERENCES items(id),
  quantity DECIMAL(10,2),
  unit_price DECIMAL(12,2),
  discount DECIMAL(12,2),
  tax_rate DECIMAL(5,2),
  tax_amount DECIMAL(12,2),
  line_total DECIMAL(12,2)
);
```

### Inventory

```sql
CREATE TABLE items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL,
  sku VARCHAR(100) UNIQUE,
  barcode VARCHAR(100),
  category_id UUID REFERENCES categories(id),
  unit VARCHAR(20),                        -- pcs, kg, ltr, etc.
  sales_price DECIMAL(12,2),
  purchase_price DECIMAL(12,2),
  mrp DECIMAL(12,2),
  wholesale_price DECIMAL(12,2),
  hsn_code VARCHAR(10),
  gst_rate DECIMAL(5,2),
  opening_stock DECIMAL(10,2) DEFAULT 0,
  low_stock_alert DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE stock (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  item_id UUID REFERENCES items(id),
  godown_id UUID REFERENCES godowns(id),
  physical_qty DECIMAL(10,2) DEFAULT 0,
  reserved_qty DECIMAL(10,2) DEFAULT 0,
  blocked_qty DECIMAL(10,2) DEFAULT 0,
  damaged_qty DECIMAL(10,2) DEFAULT 0,
  available_to_sell DECIMAL(10,2) GENERATED ALWAYS AS 
    (physical_qty - reserved_qty - blocked_qty - damaged_qty) STORED,
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE stock_movements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  item_id UUID REFERENCES items(id),
  godown_id UUID REFERENCES godowns(id),
  movement_type VARCHAR(30),               -- purchase_in, sale_out, adjustment, etc.
  quantity DECIMAL(10,2),
  reference_type VARCHAR(50),              -- invoice, purchase, adjustment
  reference_id UUID,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Parties

```sql
CREATE TABLE parties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL,
  party_type VARCHAR(20),                  -- customer, supplier, retailer
  phone VARCHAR(15),
  whatsapp VARCHAR(15),
  email VARCHAR(200),
  gstin VARCHAR(15),
  pan VARCHAR(10),
  address TEXT,
  branch_id UUID REFERENCES branches(id),
  opening_balance DECIMAL(12,2) DEFAULT 0,
  credit_period INT,                       -- days
  credit_limit DECIMAL(12,2),
  b2b_status VARCHAR(30),                  -- NULL, PENDING, APPROVED, REJECTED
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Payments

```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  party_id UUID REFERENCES parties(id),
  amount DECIMAL(12,2) NOT NULL,
  payment_mode VARCHAR(30),                -- cash, bank, upi, cheque, neft, rtgs, imps
  reference_number VARCHAR(100),
  utr_number VARCHAR(100),
  cheque_number VARCHAR(50),
  payment_date DATE,
  notes TEXT,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payment_matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  payment_id UUID REFERENCES payments(id),
  invoice_id UUID REFERENCES invoices(id),
  matched_amount DECIMAL(12,2),
  matched_at TIMESTAMP DEFAULT NOW()
);
```

### Orders

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  party_id UUID REFERENCES parties(id),
  branch_id UUID REFERENCES branches(id),
  channel VARCHAR(30),                     -- web, mobile, whatsapp, phone, salesman
  status VARCHAR(30),                      -- DRAFT, VALIDATING, CONFIRMED, RESERVED, BLOCKED, APPROVED, BILLING_PENDING, INVOICED, CANCELLED
  subtotal DECIMAL(12,2),
  discount DECIMAL(12,2),
  tax_amount DECIMAL(12,2),
  grand_total DECIMAL(12,2),
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### HRMS

```sql
CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  employee_code VARCHAR(50) UNIQUE,
  designation VARCHAR(100),
  department VARCHAR(100),
  joining_date DATE,
  salary DECIMAL(12,2),
  bank_account VARCHAR(50),
  ifsc_code VARCHAR(20),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employee_id UUID REFERENCES employees(id),
  punch_type VARCHAR(20),                  -- check_in, check_out
  punch_time TIMESTAMP,
  gps_latitude DECIMAL,
  gps_longitude DECIMAL,
  gps_accuracy DECIMAL,
  selfie_url TEXT,
  branch_id UUID REFERENCES branches(id),
  status VARCHAR(30),                      -- VERIFIED, FLAGGED, MANUAL
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# 9. BUILD PHASES & ROADMAP

## Phase 1: Foundation (Months 1-3)

**Goal:** Working core platform

| Deliverable | Status |
|---|---|
| Core platform (auth, modules, event bus) | In progress |
| Billing engine (8-second invoice) | In progress |
| Inventory module | Planned |
| Parties & payments | Planned |
| Basic reports | Planned |
| Web app shell | Planned |

**Budget:** ₹2,00,000

**Milestone:** First invoice created in production

## Phase 2: Commerce & Payments (Months 4-6)

| Deliverable |
|---|
| E-commerce (B2C + B2B) |
| Order Control Engine |
| Payment verification (UTR) |
| Customer & retailer signup |
| Mobile apps (customer, retailer) |

**Budget:** ₹3,00,000

**Milestone:** 100 live customer orders

## Phase 3: Field & HRMS (Months 7-9)

| Deliverable |
|---|
| HRMS & attendance |
| GPS geofence verification |
| Field intelligence |
| Delivery module with OTP |
| Salesman & delivery apps |

**Budget:** ₹3,50,000

**Milestone:** Full field operations running

## Phase 4: AI & Intelligence (Months 10-12)

| Deliverable |
|---|
| AI Agent Operating System |
| Sales AI (WhatsApp ordering) |
| Fraud detection engine |
| Recommendation engine |
| OCR (purchases, payments) |
| Super Admin Command Center |

**Budget:** ₹5,00,000

**Milestone:** AI handling 50% of routine operations

## Phase 5: Scale & Productize (Months 13-18)

| Deliverable |
|---|
| Phone AI (voice ordering) |
| Telegram integration |
| Digital services |
| Autopilot campaigns |
| Computer vision (returns) |
| White-label packaging |

**Budget:** ₹3,00,000

**Milestone:** First external customer deployed

## Total Development Investment

| Phase | Duration | Budget |
|---|---|---|
| Phase 1 | 3 months | ₹2,00,000 |
| Phase 2 | 3 months | ₹3,00,000 |
| Phase 3 | 3 months | ₹3,50,000 |
| Phase 4 | 3 months | ₹5,00,000 |
| Phase 5 | 6 months | ₹3,00,000 |
| **Total** | **18 months** | **₹16,50,000** |

---

# 10. COST ANALYSIS

## 10.1 Development Cost (One-Time)

### Option A: AI-First Build (You + AI Agents)

| Item | Cost |
|---|---|
| AI Agent API Costs (development) | ₹1,00,000 |
| Cloud Infrastructure (dev/staging) | ₹50,000 |
| Third-party API setup | ₹50,000 |
| Design (Figma + AI) | ₹30,000 |
| Testing devices | ₹50,000 |
| Miscellaneous | ₹50,000 |
| **TOTAL** | **₹3,30,000** |
| **Timeline** | **6-9 months** |

### Option B: Small Team (2-3 Developers)

| Item | Monthly | Total (9 months) |
|---|---|---|
| Senior Full-Stack Dev | ₹1,50,000 | ₹13,50,000 |
| Junior Full-Stack Dev | ₹60,000 | ₹5,40,000 |
| AI/ML Engineer | ₹1,20,000 | ₹10,80,000 |
| AI Agent API Costs | ₹15,000 | ₹1,35,000 |
| Cloud Infrastructure | ₹25,000 | ₹2,25,000 |
| Third-party APIs | ₹10,000 | ₹90,000 |
| Miscellaneous | ₹20,000 | ₹1,80,000 |
| **TOTAL** | **₹4,00,000** | **₹36,00,000** |

## 10.2 Annual Operating Cost

| Component | Monthly | Annual |
|---|---|---|
| **Cloud Infrastructure** | | |
| Compute (API servers) | ₹30,000 | ₹3,60,000 |
| Database (PostgreSQL) | ₹15,000 | ₹1,80,000 |
| Redis (Cache + Queue) | ₹5,000 | ₹60,000 |
| Object Storage (S3) | ₹3,000 | ₹36,000 |
| CDN (Cloudflare) | ₹2,000 | ₹24,000 |
| Kubernetes / Docker | ₹10,000 | ₹1,20,000 |
| **Subtotal Infra** | **₹65,000** | **₹7,80,000** |
| | | |
| **AI / LLM Costs** | | |
| Claude API | ₹40,000 | ₹4,80,000 |
| GPT-4o | ₹15,000 | ₹1,80,000 |
| Whisper (voice) | ₹3,000 | ₹36,000 |
| Vision/OCR | ₹10,000 | ₹1,20,000 |
| **Subtotal AI** | **₹68,000** | **₹8,16,000** |
| | | |
| **Third-Party APIs** | | |
| WhatsApp Business API | ₹15,000 | ₹1,80,000 |
| SMS Gateway | ₹3,000 | ₹36,000 |
| GST GSP (e-Invoice) | ₹2,000 | ₹24,000 |
| Payment Gateway (business) | ₹5,000 | ₹60,000 |
| Maps / Geocoding | ₹5,000 | ₹60,000 |
| Telephony (Phone AI) | ₹10,000 | ₹1,20,000 |
| Email | ₹1,000 | ₹12,000 |
| **Subtotal APIs** | **₹41,000** | **₹4,92,000** |
| | | |
| **Monitoring & Security** | | |
| Grafana / Prometheus | ₹5,000 | ₹60,000 |
| Sentry | ₹3,000 | ₹36,000 |
| Backup (cross-region) | ₹3,000 | ₹36,000 |
| **Subtotal Monitoring** | **₹11,000** | **₹1,32,000** |
| | | |
| **TOTAL MONTHLY** | **₹1,85,000** | |
| **TOTAL ANNUAL** | | **₹22,20,000** |

## 10.3 Total Cost Summary (Internal Edition)

| Scenario | Year 1 (Build + Ops) | Year 2+ (Ops Only) |
|---|---|---|
| **AI-First (You + AI)** | ₹3,30,000 + ₹22,20,000 = **₹25,50,000** | **₹22,20,000/year** |
| **Small Team (3 devs)** | ₹36,00,000 + ₹22,20,000 = **₹58,20,000** | **₹22,20,000/year** |

---

# 11. DEPLOYMENT STRATEGY

## 11.1 Hosting Options

### Option A: Cloud (Recommended)

```
Provider: AWS Mumbai / DigitalOcean / Azure India
Pros: Managed, scalable, secure
Cons: Monthly cost
Cost: ₹65,000/month (as above)
```

### Option B: On-Premise (Your Own Server)

```
Hardware: Dedicated server in your office
Pros: No monthly cloud cost, full control
Cons: Maintenance, power, cooling, IT staff
Cost: ₹3,00,000 one-time + ₹10,000/month electricity
```

### Option C: Hybrid

```
Production: Cloud (AWS Mumbai)
Backup: On-premise (your office)
Pros: Best of both
Cons: Higher cost
```

## 11.2 Docker Deployment

```bash
# One-command deployment
make up
# Or manually
docker compose -f docker/docker-compose.yml up -d
```

## 11.3 Scaling Levels

| Level | Users | Infrastructure | Cost/Month |
|---|---|---|---|
| **Level 1: Single Server** | 0 - 5,000 | 1 VPS (8GB RAM, 4 CPU) | ₹3,000-8,000 |
| **Level 2: Separated** | 5,000 - 25,000 | App server + DB server + Redis | ₹15,000-30,000 |
| **Level 3: Load Balanced** | 25,000 - 100,000 | LB + 3 app servers + DB cluster | ₹50,000-1,00,000 |
| **Level 4: Kubernetes** | 100,000+ | K8s cluster + managed DB + CDN | ₹2,00,000+ |

---

# 12. SECURITY ARCHITECTURE

## 12.1 Authentication & Authorization

```
✅ OTP-based login (6 digits, 5-minute expiry)
✅ JWT tokens (15m access, 7d refresh)
✅ Role-based access control (RBAC)
✅ Branch-scoped permissions
✅ Session management (Redis)
✅ 2FA for admin roles
✅ Device fingerprinting
✅ Rate limiting (5 OTP/hour, 3 signups/day)
```

## 12.2 Data Security

```
✅ HTTPS everywhere (TLS 1.3)
✅ Data encryption at rest (AES-256)
✅ PII redaction in logs
✅ Immutable audit logs
✅ DPDP Act 2023 compliance
✅ Data localization (AWS Mumbai)
✅ Backup encryption
✅ Secrets management (AWS Secrets Manager)
```

## 12.3 API Security

```
✅ Rate limiting per endpoint
✅ Input validation (Pydantic/Zod)
✅ SQL injection prevention (parameterized queries)
✅ XSS prevention (React auto-escaping)
✅ CSRF protection
✅ CORS strict mode
✅ API versioning
✅ Request signing (optional)
```

## 12.4 Infrastructure Security

```
✅ Cloudflare WAF (DDoS protection)
✅ VPC isolation
✅ Security groups (firewall rules)
✅ Private subnets for databases
✅ Bastion host for admin access
✅ Regular security patches
✅ Vulnerability scanning
✅ Penetration testing (quarterly)
```

---

# 13. MONITORING & OPERATIONS

## 13.1 Key Metrics

```
API latency p50/p95/p99
API error rate
Database CPU/memory/connections
Redis memory/hit rate
Queue backlog
OCR job duration
WhatsApp delivery rate
SMS OTP success rate
Payment gateway success rate
Agent success rate
Agent cost per day
Sync failure rate
Offline queue size
Geofence accuracy
Attendance anomaly rate
```

## 13.2 Alerts

```
P0 (Critical):
├── Site down
├── Database down
├── Payment gateway failing
└── Data loss detected

P1 (High):
├── API latency > 5s
├── Error rate > 5%
├── Database connections > 80%
├── Redis memory > 80%
├── Disk space > 80%
├── Certificate expiring < 14 days
└── Backup failed

P2 (Medium):
├── Slow endpoint (p99 > 2s)
├── High error rate on specific endpoint
├── Queue backlog growing
└── Agent budget 80% consumed
```

## 13.3 Operational Procedures

### Daily

- [ ] Check Grafana dashboards
- [ ] Review error rates in Sentry/logs
- [ ] Verify backup completed successfully
- [ ] Check disk space `df -h`)

### Weekly

- [ ] Review slow queries `pg_stat_statements`)
- [ ] Check Redis memory usage
- [ ] Review API response times
- [ ] Update dependencies if security patches available

### Monthly

- [ ] Test backup restore procedure
- [ ] Review and rotate secrets/API keys
- [ ] Clean up old Docker images `docker system prune`)
- [ ] Review and update monitoring alerts
- [ ] Capacity planning review

### Quarterly

- [ ] Full disaster recovery drill
- [ ] Security audit
- [ ] Performance benchmarking
- [ ] Architecture review for scaling needs

---

# 14. DEVELOPMENT WORKFLOW

## 14.1 Git Strategy

```
Branch naming:
feat/<short-description> — new features
fix/<short-description> — bug fixes
refactor/<short-description> — refactoring
docs/<short-description> — documentation
test/<short-description> — tests

Commit messages (Conventional Commits):
feat: add party GSTIN auto-lookup
fix: voucher save button not enabled when form valid
refactor: extract GST calculation to shared utility
docs: update onboarding for new dev env
test: add E2E test for invoice creation
chore: bump dependencies
```

## 14.2 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
  deploy-staging:
    needs: test
    if: github.ref == 'refs/heads/main'
    steps:
      - run: gh workflow run deploy-staging.yml
  deploy-prod:
    needs: deploy-staging
    environment: production  # Requires manual approval
    steps:
      - run: gh workflow run deploy-prod.yml
```

## 14.3 Environment Setup

```bash
# .env.production
PLATFORM_MODE=internal
MULTI_TENANT=false
SUBSCRIPTIONS_ENABLED=false
PUBLIC_SIGNUP=true
STAFF_SIGNUP=false
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
S3_BUCKET=distribu-ai-prod
JWT_SECRET=<generated>
OTP_PROVIDER=msg91
WHATSAPP_PROVIDER=gupshup
PAYMENT_PROVIDER=razorpay
GST_GSP=cleartax
MAPS_PROVIDER=mapmyindia
ANTHROPIC_API_KEY=<key>
OPENAI_API_KEY=<key>
```

## 14.4 Development Tools

| Tool | Purpose |
|---|---|
| **pnpm** | Package manager |
| **Turborepo** | Monorepo builds |
| **GitHub** | Code hosting |
| **GitHub Actions** | CI/CD |
| **Docker** | Local + production containers |
| **VS Code** | Editor |
| **TablePlus** | Database GUI |
| **Postman / Bruno** | API testing |
| **Figma** | Design |
| **Linear / GitHub Issues** | Task tracking |
| **Slack / Telegram** | Alerts and communication |

---

# FINAL CTO SUMMARY

| Category | Recommendation |
|---|---|
| Frontend | Next.js 14 (Web) + React Native/Expo (Mobile) |
| Backend | FastAPI (Python) + Node.js (Realtime) |
| Database | PostgreSQL 16 + PostGIS + pgvector |
| Authentication | Custom OTP (MSG91) + JWT + RBAC |
| Storage | Cloudflare R2 (Zero egress) / AWS S3 |
| Hosting | AWS ECS / DigitalOcean App Platform |
| CDN / WAF | Cloudflare |
| Cache / Queue | Redis (ElastiCache / Upstash) |
| AI | Hybrid: GPT-4o Mini (Routine) + Claude 3.5 (Complex) |
| Payments | Razorpay (India) |
| CI/CD | GitHub Actions + Docker Registry |
| Free Cost | **$0/mo** (Local dev + free tiers) |
| Freemium Cost | **$50 - $120/mo** (VPS + Managed DB) |
| Paid Cost | **$300 - $1,100/mo** (Cloud Native at scale) |
| Architecture | Modular Monolith (Lego-Block) |

---

## CTO Q&A

1. **Cheapest reliable architecture?** Local Docker for dev, Hetzner/DigitalOcean VPS + Supabase Pro for prod (~$50/mo).
2. **Best free stack?** Next.js + FastAPI + Supabase Free + Cloudflare.
3. **Best freemium stack?** Vercel Pro + Railway/Render + Supabase Pro + Upstash.
4. **What should I pay for first?** Managed Database (Supabase Pro/RDS) and Domain/SSL. Never host production Postgres on a raw VPS without managed backups.
5. **What should I avoid paying for?** Egress bandwidth (use Cloudflare R2 instead of AWS S3 for heavy files), expensive enterprise AI models for simple tasks.
6. **What technology to avoid?** MongoDB (relational data requires SQL), Firebase (high vendor lock-in, expensive at scale), proprietary low-code platforms.
7. **When should I scale?** When CPU > 70% consistently, or DB connections hit 80%. Not before.
8. **Biggest cost?** AI API tokens and WhatsApp Business API message costs at scale. Mitigate with aggressive caching and smaller models.
9. **Biggest technical risk?** Offline sync conflicts in the mobile app and AI hallucinating financial transactions. Mitigate with strict backend guardrails and CRDTs/Idempotency keys.
10. **Best long-term value?** PostgreSQL + Docker + Modular Monolith. It scales from 1 user to 1 million users without rewriting the core architecture.

---

**Document Status:** Final CTO Blueprint
**Version:** 1.0
**Date:** August 2026
**Next Step:** Initialize repository with `PLATFORM_MODE=internal` and start Phase 1 (Core Platform).

---

*End of Master Blueprint*
