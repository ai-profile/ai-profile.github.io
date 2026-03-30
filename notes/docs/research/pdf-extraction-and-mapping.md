# PDF Extraction and Structured Data Normalization

## Overview
This document summarizes efficient methods for extracting content from complex PDF documents into structured JSON and strategies for normalizing/mapping those keys semantically (e.g., mapping address-like text to `address` keys).

## 1. PDF Extraction Tools
The current best-in-class open-source tools for high-fidelity extraction:

- **MinerU (v3.0.0)**: Best for high accuracy (86.2+ on OmniDocBench). Handles layout, tables, formulas, and OCR natively.
- **Docling (IBM)**: Highly robust for multi-format extraction (PDF, DOCX, etc.) with seamless LLM integration.
- **PyMuPDF4LLM**: Optimized for speed and lightweight environments.

## 2. Structured Data Normalization (Semantic Mapping)
Extracting raw data is step one; mapping it to correct schemas is step two.

### Approaches:
- **LLM-Based Normalization (Recommended)**:
  - Use structured output (e.g., OpenAI/Claude JSON mode or Pydantic + local Llama 3.2 via Ollama) to re-map keys based on content semantics.
  - *Example*: An input `{ "k1": "123 Main St, Hanoi" }` becomes `{ "address": "123 Main St, Hanoi" }`.
- **Rule-Based Mapping**:
  - For predictable documents (forms/invoices), use static mappings or fuzzy matching (e.g., `pandas` + `fuzzywuzzy`) if patterns are known.
- **Enterprise Solutions**:
  - Azure Document Intelligence, Google Document AI, or AWS Textract provide pre-mapped semantic keys for standardized documents like invoices.

## 3. Recommended Workflow
1. **Extract**: Use **MinerU** to convert PDF into raw JSON.
2. **Process**: Pass raw JSON keys/values through an LLM (using a defined JSON schema/Pydantic model) to standardize them.
3. **Validate**: Perform schema validation to ensure the output meets the target application's requirements.
