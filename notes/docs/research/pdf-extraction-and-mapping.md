# PDF Extraction and Structured Data Normalization

## Overview
This document summarizes efficient methods for extracting content from complex PDF documents into structured JSON and strategies for normalizing/mapping those keys semantically (e.g., mapping address-like text to `address` keys).

## 1. Top PDF Extraction Tools (2024-2026)

### 1. **MinerU** ⭐️ **BEST CHOICE**
- **Version**: 3.0.0 (Mar 2026)
- **GitHub**: [MinerU](https://github.com/opendatalab/MinerU)
- **License**: AGPLv3
- **Accuracy**: 86.2 on OmniDocBench v1.5
- **Features**:
  - PDF, DOCX, Image → JSON/Markdown
  - Layout detection, OCR, table recognition, formula recognition
  - Multi-column, vertical text support
  - 109 languages OCR
  - Output: structured JSON with reading order, bounding boxes
  - CPU & GPU support
- **Installation**: `uv pip install -U "mineru[all]"`

### 2. **Docling (IBM Research)**
- **Version**: 2.x (2025)
- **GitHub**: [Docling](https://github.com/docling-project/docling)
- **License**: MIT
- **Features**:
  - PDF, DOCX, PPTX, XLSX, HTML, images
  - Advanced layout understanding and table structure preservation
  - Formula recognition (LaTeX)
  - Output: DocTags (structured), Markdown, JSON, HTML
  - Integration: LangChain, LlamaIndex

### 3. **PyMuPDF4LLM**
- **Version**: 1.27+ (2024-2025)
- **GitHub**: [PyMuPDF/RAG](https://github.com/pymupdf/RAG)
- **License**: AGPL
- **Features**:
  - Extremely fast PDF → JSON/Markdown/TXT
  - Layout analysis and auto-OCR support
  - Bounding boxes for elements
  - Header/footer removal

### 4. **DocStrange (Nanonets)**
- **Version**: 2025
- **GitHub**: [DocStrange](https://github.com/NanoNets/docstrange)
- **License**: MIT
- **Features**:
  - Multi-format extraction → JSON/Markdown/CSV/HTML
  - Advanced OCR with fallback
  - Structured JSON with schema support
  - Cloud API + Local GPU support
  - Built-in Web UI

### 5. **Unstructured**
- **Version**: 2025
- **GitHub**: [Unstructured](https://github.com/Unstructured-IO/unstructured)
- **License**: Apache 2.0
- **Features**:
  - Enterprise-grade extraction
  - OCR (Tesseract, Azure, AWS Textract)
  - Table detection
  - Element-level segmentation with coordinate metadata

---

## 2. Structured Data Normalization & Semantic Mapping

Mapping raw/incorrect JSON keys to meaningful, standardized names (e.g., mapping a text value containing an address to the key `address`) is crucial for clean data pipelines.

### 🧠 LLM-Powered Mapping (Khuyến nghị hàng đầu)

1. **OpenAI / Claude / Gemini với Structured Output**: Sử dụng LLM để phân tích giá trị và tự động đề xuất key dựa trên ngữ nghĩa.
2. **OpenAI Structured Outputs**: Định nghĩa JSON Schema với các tên trường ngữ nghĩa (semantic field names), không cần prompt phức tạp.

### 🔧 Open-Source Frameworks

3. **Pydantic + LLM (Local/Cloud)**: Sử dụng `Pydantic` để định nghĩa schema đích và các LLM cục bộ (như Llama 3.2 qua Ollama) để thực hiện mapping dựa trên mô tả trường.
4. **Unstructured + Custom Parser**: Sử dụng metadata của `unstructured` để xây dựng lớp hậu xử lý (post-processing) tùy chỉnh nhằm remap key.

### ⚙️ ETL / Data Pipeline Tools

5. **Apache NiFi**: Công cụ kéo-thả mạnh mẽ với processor `JoltTransformJSON` để đổi tên trường, kết hợp với `ExecuteScript` để gọi LLM mapping.
6. **dbt (data build tool)**: Giúp duy trì nhất quán schema qua các models, thích hợp cho việc chuẩn hóa dữ liệu quy mô lớn.
7. **Pandas + Fuzzy Matching**: Sử dụng thư viện `fuzzywuzzy` để ánh xạ các key cũ sang key mới dựa trên độ tương đồng của chuỗi (pattern matching).

### 🏢 Enterprise Solutions

8. **Azure Document Intelligence / Form Recognizer**: Cung cấp các model tiền huấn luyện để trích xuất key-value từ form với các trường ngữ nghĩa chuẩn.
9. **AWS Textract + Comprehend**: Kết hợp trích xuất văn bản (Textract) và phân tích thực thể (Comprehend) để gán semantic keys.
10. **Google Document AI**: Cung cấp các parser chuyên biệt cho hóa đơn, hợp đồng với output chuẩn.

### 🛠️ Specialized Data Mapping Tools

11. **OpenRefine**: Công cụ làm sạch dữ liệu mạnh mẽ với ngôn ngữ GREL để đổi tên trường hàng loạt.
12. **Pentaho Data Integration (Kettle)**: ETL open-source với step `Select Values` để rename/move fields linh hoạt.

### 🤖 Latest: LLM-as-a-Service for Schema Mapping

13. **MinerU's Post-processing**: Kết hợp output có cấu trúc sẵn của MinerU với LLM để chuẩn hóa key cuối cùng.
14. **Docling's Document Tags**: Docling tự động cung cấp DocTags với cấu trúc ngữ nghĩa sẵn, giảm thiểu công sức mapping.

---

## 3. Recommended Workflow
1. **Extract**: Sử dụng **MinerU** (độ chính xác cao nhất) để trích xuất PDF/Tài liệu thành raw JSON.
2. **Normalize**: Đưa các raw keys/values qua một LLM (dùng Pydantic model hoặc Structured Output) để chuẩn hóa tên key.
3. **Validate**: Thực hiện kiểm tra schema để đảm bảo dữ liệu đầu ra đáp ứng yêu cầu của hệ thống đích.
