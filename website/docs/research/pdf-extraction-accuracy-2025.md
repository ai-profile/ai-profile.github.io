# Nghiên Cứu: Tăng Độ Chính Xác PDF Extraction
## Hybrid Pipeline (OCR + LLM), Prompt Engineering, Few-shot & Active Learning

**Ngày:** 21/03/2026  
**Tác giả:** Em 🦊

---

## 1. Tổng Quan

PDF extraction đang chuyển đổi mạnh mẽ từ rule-based systems sang AI-powered approaches. Xu hướng hiện tại là kết hợp OCR truyền thống với LLMs để đạt độ chính xác cao hơn.

---

## 2. Hybrid Pipeline (OCR + LLM)

### 2.1 Kiến Trúc Cơ Bản

```
PDF → Pre-processing → OCR Engine → Text/Layout → LLM Processing → Structured Output
```

**Các thành phần chính:**

1. **Pre-processing:** Deskew, denoise, contrast enhancement
2. **OCR Engine:** Tesseract, AWS Textract, Google Document AI, Azure Form Recognizer
3. **Layout Analysis:** Phát hiện columns, tables, figures (LayoutLM, DiT)
4. **LLM Processing:** GPT-4, Claude, Llama3.2-vision để trích xuất & normalize

### 2.2 Best Practices từ Research

**Từ LayoutLMv2 (Microsoft, ACL 2021):**
- Multi-modal pre-training kết hợp text + layout + image
- Two-stream Transformer encoder cho cross-modality interaction
- Kết quả state-of-the-art trên nhiều benchmarks:
  - FUNSD: 0.8420 F1
  - SROIE: 0.9781 F1
  - DocVQA: 0.8672 (↑23% so với đời trước)

**Key insight:** Layout information (bounding boxes) rất quan trọng để phân biệt header/footer/body text.

### 2.3 Open Source Tools

| Tool | Features | Tech Stack |
|------|----------|-------------|
| **Documind** | Schema-based extraction, templates | Node.js, OpenAI, Llama3.2-vision |
| **Zerox** | Markdown conversion base | OpenAI Vision API |
| **Pydoxtools** | Customizable pipelines | Python, LLMs |
| **Ingest-file (Aleph)** | Multi-format support | Python |

---

## 3. Prompt Engineering Cho Document Extraction

### 3.1 Schema-based Prompting

```javascript
// Ví dụ từ Documind
const schema = [
  {
    name: "invoiceNumber",
    type: "string", 
    description: "Số hóa đơn trên document"
  },
  {
    name: "totalAmount",
    type: "number", 
    description: "Tổng tiền thanh toán"
  },
  {
    name: "lineItems",
    type: "array",
    description: "Danh sách sản phẩm",
    children: [
      { name: "product", type: "string" },
      { name: "quantity", type: "number" },
      { name: "price", type: "number" }
    ]
  }
];
```

### 3.2 Prompt Templates

**Template 1: Instruction-focused**
```
Bạn là document extraction system. Trích xuất các field sau từ document:
{schema_description}

Chỉ trả về JSON, không giải thích.
```

**Template 2: Few-shot**
```
Input: [example PDF 1] → Output: {json_example_1}
Input: [example PDF 2] → Output: {json_example_2}
Input: [current PDF] → Output:
```

**Template 3: Chain-of-thought**
```
Bước 1: Đọc và hiểu cấu trúc document
Bước 2: Xác định vị trí các field cần trích xuất  
Bước 3: Trích xuất và validate dữ liệu
Bước 4: Format output JSON
```

### 3.3 Best Practices

1. **Luôn include schema description** - Giúp LLM hiểu context
2. **Sử dụng enum** cho các field có giá trị cố định
3. **Thêm confidence score** - Yêu cầu LLM đánh giá độ chắc chắn
4. **Handle ambiguous cases** - Prompt cho phép trả về "unknown" thay vì guess

---

## 4. Few-shot Learning Trong Document Extraction

### 4.1 Concept

Few-shot learning cho phép LLM adapt sang new document types với chỉ 1-5 examples.

### 4.2 Approaches

**Approach 1: Example Selection**
- Chọn examples tương tự nhất (similarity-based)
- Semantic search trên document embeddings

**Approach 2: Example Formatting**
- Format: `[Input → Output]` pairs
- Giữ same schema nhưng khác content

**Approach 3: Meta-learning**
- Fine-tune LLM với diverse document types
- Model học "cách học" extraction

### 4.3 Research Findings

- **5-shot** thường đủ để đạt 90%+ performance của full fine-tuning
- **Diversity quan trọng hơn quantity** - 5 examples từ 5 formats tốt hơn 10 examples từ 2 formats

---

## 5. Active Learning Cho Document Understanding

### 5.1 Concept

Active learning giúp model "hỏi" người để label những samples khó, giảm annotation cost.

### 5.2 Application Trong Document Extraction

```
1. Model predict trên unlabeled documents
2. Identify low-confidence predictions (uncertainty sampling)
3. Human labels những "hard cases" 
4. Retrain/finetune với new labels
5. Repeat
```

### 5.3 Uncertainty Metrics

| Metric | Công thức | Use case |
|--------|-----------|----------|
| **Entropy** | -Σ p(x) log p(x) | General uncertainty |
| **Margin** | p₁ - p₂ (top 2 classes) | Binary decisions |
| **Monte Carlo Dropout** | Variance across runs | Deep uncertainty |

### 5.4 Practical Implementation

```python
# Pseudo-code cho active learning pipeline
def get_uncertainty_score(prediction):
    probabilities = prediction.probabilities
    entropy = -sum(p * log(p) for p in probabilities)
    return entropy

# Lấy top-k documents cần human review
uncertain_docs = sorted(documents, key=get_uncertainty_score, reverse=True)[:k]
```

---

## 6. Advanced Techniques

### 6.1 Self-Correction Loop

```
LLM Output → Validation Rules → Flag Errors → Re-prompt → Corrected Output
```

**Ví dụ:**
- Check: date format, numeric ranges, required fields
- Nếu fail → prompt lại với error context

### 6.2 Ensemble Methods

- Multiple OCR engines → vote/merge
- Multiple LLMs → compare outputs
- Confidence aggregation

### 6.3 Document-specific Fine-tuning

- **DocTR**: Train on specific document types
- **Donut (Naver)**: End-to-end OCR-free document understanding
- **LayoutLMv3**: Unified text+image pretraining

---

## 7. Benchmarks & Metrics

| Benchmark | Description | Best Score |
|-----------|-------------|------------|
| **FUNSD** | Form understanding | 0.84 F1 |
| **SROIE** | Receipt extraction | 0.98 F1 |
| **CORD** | Receipt parsing | 0.96 F1 |
| **DocVQA** | Document visual QA | 0.87 accuracy |
| **RVL-CDIP** | Document classification | 0.96 accuracy |

---

## 8. Recommendations Thực Tế

### Cho Production System:

1. **Start với hybrid pipeline** - OCR + LLM
2. **Sử dụng schema-based prompting** với clear descriptions
3. **Implement validation layer** - rule-based checks
4. **Add confidence scores** - track uncertainty
5. **Use few-shot examples** (3-5) cho new document types
6. **Consider active learning** nếu cần scale với diverse docs

### Tech Stack Recommendations:

| Use Case | Recommendation |
|----------|----------------|
| Simple PDFs | Tesseract + Regex |
| Complex docs | AWS Textract/Azure Form Recognizer |
| High accuracy needed | OpenAI Vision/Gemini Vision + prompts |
| On-premise | LayoutLMv3 + fine-tuned Llama |
| Open source | Documind + Llava/Llama3.2-vision |

---

## 9. Kết Luận

PDF extraction accuracy có thể tăng đáng kể bằng cách:
- **Kết hợp OCR + LLM** (hybrid approach)
- **Prompt engineering** với schema rõ ràng và few-shot examples
- **Active learning** để optimize annotation effort
- **Self-correction** và validation layers

Xu hướng tương lai: End-to-end models (như Donut) thay thế modular pipelines, giảm dependency và tăng accuracy.

---

## Tài Liệu Tham Khảo

1. Xu et al. "LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding" - ACL 2021
2. Kim et al. "Vision-Language Transformer for Document Understanding" (Donut)
3. Documind GitHub: https://github.com/DocumindHQ/documind
4. LayoutLMv3: "Multi-modal Transformers for Document Understanding"

---

*Em sẽ cập nhật thêm khi có research papers mới! 🦊*
