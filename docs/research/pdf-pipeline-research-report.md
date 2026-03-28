# PDF Extraction Pipeline - Competitive Analysis

## Tổng quan

Báo cáo này phân tích kiến trúc pipeline của các đối thủ trong lĩnh vực PDF extraction, tập trung vào 5 bước chính: OCR → Layout Analysis → Table Extraction → Data Validation → Output.

---

## 1. OCR (Optical Character Recognition)

### Các công nghệ phổ biến:

| Nhà cung cấp | Công nghệ |
|--------------|-----------|
| **Amazon Textract** | Proprietary ML OCR engine |
| **Google Cloud Vision** | Deep learning OCR |
| **Azure Computer Vision** | Azure OCR API |
| **Mindee** | Tesseract + custom models |
| **Veryfi** | Veryfi OCR Engine (in-house) |
| **Rossum** | Rossum OCR engine |
| **Nanonets** | In-house OCR |
| **Open source** | Tesseract, PaddleOCR |

### Xu hướng:
- Các big tech (AWS, Google, Microsoft) dùng proprietary OCR
- Startup thường kết hợp Tesseract với custom models
- PaddleOCR đang nổi lên như open-source alternative mạnh

---

## 2. Layout Analysis

### Mục đích:
- Xác định cấu trúc tài liệu (heading, paragraph, image, table)
- Phát hiện vùng chứa nội dung (regions of interest)
- Xác định reading order

### Cách tiếp cận của đối thủ:

| Nhà cung cấp | Approach |
|--------------|----------|
| **Amazon Textract** | AWS proprietary ML models |
| **Google Document AI** | Transformer-based parser |
| **Mindee** | Custom deep learning (CNN + Transformer) |
| **Rossum** | Multi-language layout models |
| **DocParser** | Template-based segmentation |

### Công nghệ:
- **Deep Learning**: CNN, ResNet, ViT (Vision Transformer)
- **Rule-based**: PDF structure analysis
- **Hybrid**: Kết hợp cả hai

---

## 3. Table Extraction

### Thách thức lớn nhất:
- Xác định boundaries của table
- Phát hiện merged cells
- Handle irregular layouts

### Các công nghệ:

| Nhà cung cấp | Solution |
|--------------|----------|
| **Amazon Textract** | Built-in table detection |
| **Google Document AI** | Specialized table processor |
| **Azure Form Recognizer** | Prebuilt table models |
| **Mindee** | Proprietary table algorithm |
| **Veryfi** | Receipt-specific models |
| **Rossum** | Invoice-specific table extraction |
| **Open source** | Camelot, Tabula, pdfplumber |

### Xu hướng:
- Invoice/receipt-specific models (Veryfi, Rossum)
- Visual layout + NLP kết hợp
- End-to-end deep learning thay vì rule-based

---

## 4. Data Validation

### Các phương pháp:

| Phương pháp | Mô tả | Ví dụ |
|-------------|-------|-------|
| **Rules-based** | Regex, format validation | Email, phone, date |
| **ML-based** | Train model detect anomalies |Rossum, Nanonets |
| **Cross-validation** | So sánh với database/API | Tax IDs, bank accounts |
| **Human-in-the-loop (HITL)** | Human review for low confidence | Amazon A2I, Google Review |

### Đối thủ nổi bật:
- **Rossum**: ML-based validation với confidence scores
- **Nanonets**: Hybrid ML + human review
- **Amazon A2I**: Human review integration

---

## 5. Output

### Format phổ biến:

| Format | Ưu điểm | Nhược điểm |
|--------|---------|-------------|
| **JSON** | Structured, API-friendly | Verbose |
| **CSV** | Excel-friendly, compact | Không hỗ trợ nested data |
| **XML** | Structured, validation | Verbose, old school |
| **API/Webhook** | Real-time, integration | Requires setup |

### Integration:
- REST API là tiêu chuẩn
- Webhooks cho real-time processing
- Zapier/Make integration cho no-code

---

## Tổng hợp theo nhà cung cấp

### Big Tech (Enterprise focus)
| Provider | OCR | Layout | Table | Validation | Output |
|----------|-----|--------|-------|------------|--------|
| **AWS Textract** | ✓ | ✓ | ✓ | A2I | JSON |
| **Google Doc AI** | ✓ | ✓ | ✓ | HITL | JSON |
| **Azure Form Recognizer** | ✓ | ✓ | ✓ | AI Review | JSON |

### Startup (SME/Specific use cases)
| Provider | Focus | OCR | Table | Validation | Output |
|----------|-------|-----|-------|------------|--------|
| **Mindee** | Invoices, receipts | ✓ | ✓ | API | JSON |
| **Veryfi** | Receipts, expenses | ✓ | ✓ | Rules+ML | JSON |
| **Rossum** | Invoices | ✓ | ✓ | ML | JSON |
| **Nanonets** | Generic | ✓ | ✓ | ML+HITL | JSON |
| **DocParser** | Templates | ✓ | ✓ | Rules | JSON |

---

## Recommendations cho startup

### Nếu build from scratch:
1. **OCR**: PaddleOCR hoặc Tesseract + fine-tuning
2. **Layout Analysis**: LayoutLM (HuggingFace) hoặc custom CNN
3. **Table Extraction**: Camelot/Tabula + custom ML
4. **Validation**: Rules-based + simple ML classifier

### Nếu dùng third-party APIs:
- **Invoice/Receipt**: Mindee, Veryfi, Rossum
- **Generic document**: AWS Textract, Google Doc AI
- **Budget constraint**: DocParser, Nanonets (freemium)

### Tech stack gợi ý:
- **Python** là ngôn ngữ chính
- **OpenCV** cho image preprocessing
- **Transformers** (HuggingFace) cho layout analysis
- **FastAPI** cho API
- **PostgreSQL** cho data storage
