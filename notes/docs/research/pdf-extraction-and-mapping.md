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
  - Layout analysis
  - Bounding boxes for elements
  - Header/footer removal
  - Auto-OCR support (Tesseract, etc.)

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

## 2. Structured Data Normalization (Semantic Mapping)
Extracting raw data is step one; mapping it to meaningful, standardized keys (e.g., mapping a raw text line to an `address` key) is step two.

### Strategies:
- **LLM-Based Normalization (Recommended)**:
  - Use an LLM with a defined JSON schema (e.g., via OpenAI structured output or Pydantic models). The LLM analyzes the context and content of the values to map them to standardized keys.
- **Rule-Based Mapping**:
  - For highly consistent documents (like standardized invoices), use static mappings or fuzzy matching (e.g., `pandas` + `fuzzywuzzy`).
- **Enterprise Solutions**:
  - Use services like Azure Document Intelligence or Google Document AI, which pre-train parsers to extract semantic fields like `invoice_number` or `shipping_address` automatically.

## 3. Recommended Workflow
1. **Extract**: Use **MinerU** (for highest accuracy) to convert PDF/Doc into raw JSON.
2. **Normalize**: Pass raw keys/values through an LLM (using a defined Pydantic model) to standardize them.
3. **Validate**: Perform schema validation to ensure the output meets the target application's requirements.
