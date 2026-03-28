# PDF Extraction Pipeline - Research Summary
**Ngày:** 21/03/2026
**Tuần:** Thứ 7

---

## 🔍 Tổng Quan

Với startup, việc chọn đúng PDF extraction solution ảnh hưởng trực tiếp đến:
- **Time-to-market**: Setup nhanh vs tùy chỉnh lâu
- **Operational cost**: GPU inference tốn kém
- **Accuracy**: Sai 1% có thể gây bug nghiêm trọng trong data pipeline

---

## 📊 So Sánh Các Open Source Solutions

### 1. **PaddleOCR** (Baidu)
| Tiêu chí | Đánh giá |
|----------|----------|
| **Accuracy** | ⭐⭐⭐⭐⭐ Cao nhất trong group (94.5% OmniDocBench) |
| **Speed** | ⭐⭐⭐⭐⭐ RTX 3080: ~50-100 img/s |
| **Languages** | 111 ngôn ngữ |
| **Cost** | Miễn phí (self-host) |
| **Strengths** | VLM-based (PaddleOCR-VL), tách được table/formula/seal, cross-page parsing |
| **Weaknesses** | Cần GPU, learning curve cao hơn |

**Models chính:**
- `PP-OCRv5`: Fast, accuracy cao cho scene text
- `PaddleOCR-VL-1.5`: Document parsing toàn diện, 0.9B params
- `PP-StructureV3`: Complex document → Markdown/JSON

---

### 2. **EasyOCR** (JaidedAI)
| Tiêu chí | Đánh giá |
|----------|----------|
| **Accuracy** | ⭐⭐⭐⭐ Tốt, nhưng chậm hơn Paddle |
| **Speed** | ⭐⭐⭐ ~10-20 img/s (GPU) |
| **Languages** | 80+ ngôn ngữ |
| **Cost** | Miễn phí (self-host) |
| **Strengths** | Dễ setup nhất, API đơn giản, modular (swap detection/recognition) |
| **Weaknesses** | Ít mạnh về document layout analysis |

**Architecture:** CRAFT (detection) + CRNN (recognition) - classic approach

---

### 3. **LayoutLM** (Microsoft)
| Tiêu chí | Đánh giá |
|----------|----------|
| **Accuracy** | ⭐⭐⭐⭐+ (với fine-tuning) |
| **Speed** | ⭐⭐⭐ Chậm hơn OCR thuần |
| **Languages** | Multilingual |
| **Cost** | Miễn phí (self-host) |
| **Strengths** | Hiểu layout + text cùng lúc, SOTA cho form/receipt understanding |
| **Weaknesses** | Không phải OCR thuần, cần fine-tuning cho production |

**Evolution:**
- `LayoutLM-base`: 113M params, v1
- `LayoutLMv3-base`: Unified text+image masking, tốt hơn cho document understanding

---

## 🎯 Recommendation Cho Startup

### Startup nhỏ, cần nhanh:
```
EasyOCR → PaddleOCR (nếu cần scale)
```

### Startup cần accuracy cao, có resources:
```
PaddleOCR-VL + LayoutLMv3 (cascade)
```

### Architecture đề xuất:

```
PDF/Image → Pre-processing (deskew, denoise)
            ↓
    [Cascade Approach]
    ├─ Tier 1: PaddleOCR (fast, high accuracy)
    ├─ Tier 2: EasyOCR (backup/confirmation)
    └─ Tier 3: LayoutLMv3 (layout understanding)
            ↓
    Validation Rules
    ├─ Format validation (email, phone, date)
    ├─ Cross-field validation
    └─ LLM fallback (cho ambiguous cases)
            ↓
    Structured Output (JSON/Markdown)
```

---

## 🔧 Cách Tăng Accuracy

### 1. **Ensemble Methods**
- **Multi-model voting**: Chạy PaddleOCR + EasyOCR, vote kết quả
- **Confidence weighting**: Ưu tiên model có confidence cao hơn per region
- **Meta-learning**: Train classifier chọn model nào cho input type nào

### 2. **Cascade Approach**
```
Step 1: Layout analysis (PaddleOCR PP-DocLayoutV3)
Step 2: Text extraction (OCR) - chọn model phù hợp từng region
Step 3: Field-specific refinement (LayoutLM cho form fields)
Step 4: Validation & correction
```

### 3. **Validation Rules**
- **Regex patterns**: Email, phone, date, currency
- **Cross-field logic**: total = sum(items)
- **Domain-specific rules**: Invoice number format, ID patterns
- **LLM post-processing**: Dùng LLM verify/correct ambiguous outputs

### 4. **Pre/Post Processing**
- **Pre**: Deskew, contrast enhancement, noise removal
- **Post**: Spell correction, context-aware fixing

---

## 💰 Cost Analysis (Self-host)

| Setup | Hardware | Monthly Cost |
|-------|----------|--------------|
| Development | CPU only | $0 |
| Small scale | 1x RTX 3060 | ~$50 (electricity) |
| Production | 1-2x A100 | ~$200-400 |

**Với startup:** Bắt đầu CPU (EasyOCR), upgrade khi cần.

---

## 📌 Key Takeaways

1. **PaddleOCR** là best choice tổng thể 2025-2026 (SOTA, maintained, free)
2. **EasyOCR** cho rapid prototyping
3. **LayoutLMv3** bổ sung cho layout-aware extraction
4. **Cascade > Single model** cho production accuracy
5. **Validation rules + LLM** là "secret sauce" để đạt 99%+ accuracy

---

_Next: Test benchmark thực tế trên dataset của startup?_
