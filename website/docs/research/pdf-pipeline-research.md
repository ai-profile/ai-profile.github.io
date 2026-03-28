# PDF EXTRACTION PIPELINE - RESEARCH REPORT
Ngày: 20/03/2026

---

## TỔNG HỢP 10 ĐỐI THỦ

---

### 1. AMAZON TEXTRACT

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Amazon Textract OCR (proprietary ML-based) |
| **Layout Analysis** | Deep learning - tự động detect paragraphs, columns, forms. Nhận diện reading order tự động |
| **Table Extraction** | Table detection với row/column boundaries. Hỗ trợ merged cells nhất định |
| **Data Validation** | Confidence scores cho từng field. Queries API cho phép extract specific fields |
| **Output Format** | JSON (Sync/Async) - Blocks, Lines, Words structure. Table output riêng biệt |

---

### 2. GOOGLE DOCUMENT AI

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Google Vision OCR (20+ năm research) |
| **Layout Analysis** | Enterprise OCR - detect blocks, paragraphs, lines, words, symbols. Deep learning based |
| **Table Extraction** | Form Parser - extract tables, KVPs, selection marks. Hỗ trợ simple tables (ko merged cells) |
| **Data Validation** | Confidence scores, bounding boxes cho từng element |
| **Output Format** | JSON với entities, pages, blocks. Custom Extractor (Generative AI) |

---

### 3. AZURE FORM RECOGNIZER (Document Intelligence)

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Azure AI Vision (proprietary) |
| **Layout Analysis** | Deep learning models - extract text, tables, KVPs, selection marks |
| **Table Extraction** | Layout API - extract table structure (rows, columns). Hỗ trợ complex tables |
| **Data Validation** | Confidence scores, accuracy reports. Build custom models |
| **Output Format** | JSON (analyzeDocument response). Prebuilt models cho invoices, receipts, etc. |

---

### 4. ADOBE PDF EXTRACT API

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Adobe Sensei AI/ML (proprietary) |
| **Layout Analysis** | Deep learning - detect headings, lists, paragraphs, footnotes, columns, reading order |
| **Table Extraction** | Extract tables với cell data, headers, properties. Output CSV/XLSX option |
| **Data Validation** | Confidence scores, bounding box coordinates |
| **Output Format** | JSON (comprehensive) + optional CSV/XLSX cho tables + PNG cho images |

---

### 5. ABBYY FLEXICAPTURE

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | ABBYY OCR engine (proprietary) |
| **Layout Analysis** | Deep learning CNNs + NLP. Classify by appearance/pattern và text semantics |
| **Table Extraction** | Advanced table recognition với merged cells support |
| **Data Validation** | Multi-level validation: field-level, document-level, batch-level. Business rules engine |
| **Output Format** | XML, JSON, CSV, database export. REST API for cloud |

---

### 6. NANONETS

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Proprietary AI OCR |
| **Layout Analysis** | Deep learning - template-free extraction. Learns from documents automatically |
| **Table Extraction** | AI extractors for line items, complex tables |
| **Data Validation** | Decision engines, human-in-the-loop, confidence scores |
| **Output Format** | JSON, XLS, CSV, XML. Direct integration với ERP/CRM |

---

### 7. ROSSUM

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Proprietary transactional LLM (276 languages) |
| **Layout Analysis** | LLM-based understanding of document structure |
| **Table Extraction** | Extract line items, complex tables |
| **Data Validation** | Cross-validation với master data, ERPs, business rules. AI human collaboration |
| **Output Format** | JSON. Direct ERP integration (SAP, NetSuite, etc.) |

---

### 8. MINDEE

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Proprietary AI OCR |
| **Layout Analysis** | Vision-aware pipeline, bounding boxes |
| **Table Extraction** | Line items, complex tables (merged cells). Vision models (không generic LLM) |
| **Data Validation** | Confidence scores, RAG for continuous learning, schema validation |
| **Output Format** | JSON, webhook support. Async processing cho large files |

---

### 9. DOCPARSER

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | Zonal OCR + Pattern recognition |
| **Layout Analysis** | Anchor keywords, zonal selection. Rule-based |
| **Table Extraction** | Column divider configuration |
| **Data Validation** | Rule-based extraction, confidence scores |
| **Output Format** | JSON, CSV, XML, Excel, Google Sheets. Zapier integration |

---

### 10. PARSEUR

| STEP | CÔNG NGHỆ |
|------|-----------|
| **OCR Engine** | AI document parser (template-free) |
| **Layout Analysis** | AI-based, learns from examples |
| **Table Extraction** | Line items capture, normalize data |
| **Data Validation** | Template-based, user feedback loop |
| **Output Format** | JSON, webhook, direct app integration |

---

## BẢNG SO SÁNH THEO TỪNG STEP

| SOLUTION | OCR ENGINE | LAYOUT ANALYSIS | TABLE EXTRACTION | DATA VALIDATION | OUTPUT |
|----------|------------|-----------------|-------------------|-----------------|--------|
| **Textract** | Proprietary ML | Deep Learning | Basic merged cells | Confidence scores | JSON |
| **Google Doc AI** | Google Vision | DL + Enterprise OCR | Simple tables | Confidence | JSON |
| **Azure** | Azure AI Vision | Deep Learning | Complex tables | Accuracy scores | JSON |
| **Adobe** | Adobe Sensei | DL + Reading Order | Advanced | Confidence | JSON + CSV/XLSX |
| **ABBYY** | ABBYY OCR | CNN + NLP | Advanced + merged | Multi-level rules | XML/JSON/CSV |
| **Nanonets** | Proprietary AI | Template-free DL | Complex tables | Decision engine | JSON + ERP |
| **Rossum** | Transactional LLM | LLM-based | Line items | Cross-validation | JSON + ERP |
| **Mindee** | Proprietary AI | Vision-aware | Complex tables | RAG + confidence | JSON + Webhook |
| **DocParser** | Zonal OCR | Rule-based | Column config | Rule-based | JSON/CSV/XML |
| **Parseur** | AI Parser | AI Learning | Line items | Template-based | JSON + Webhook |

---

## KEY OBSERVATIONS

1. **OCR Engine**: Major players (AWS, Google, Azure, Adobe) sử dụng proprietary ML engines. Các startup (Rossum, Mindee, Nanonets) đầu tư vào LLM/vision models.

2. **Layout Analysis**: Xu hướng chuyển sang Deep Learning + NLP thay vì rule-based. ABBYY và Rossum tích hợp NLP capabilities.

3. **Table Extraction**: Đây là phần khó nhất. Adobe, ABBYY, Mindee claim support merged cells. Generic LLMs (như ChatGPT) thường "hallucinate" table structures - nên dùng vision-specific models.

4. **Data Validation**:
   - Big cloud providers: Confidence scores
   - Enterprise (ABBYY, Rossum): Business rules engine, multi-level validation
   - AI-first (Nanonets, Rossum): Human-in-the-loop, continuous learning

5. **Output**: JSON là chuẩn. ERP integration (SAP, NetSuite) là differentiation lớn cho Rossum, Nanonets. Async processing cần thiết cho files >10MB.

---

*Research completed. Data gathered from official product documentation and websites.*
