# Pricing Model Analysis - Parseur Usage

## Scenario: 100 PDFs/ngày

### Tính toán Volume
| Metric | Giá trị |
|--------|---------|
| PDFs/ngày | 100 |
| PDFs/tháng | 3,000 |
| Pages/PDF (trung bình) | 1-3 |
| **Pages/tháng** | **3,000 - 9,000** |

---

## Parseur Pricing (tham khảo)

| Plan | Pages/month | Giá (ước tính) |
|------|-------------|----------------|
| Free | 20 | $0 |
| Base | 3,000 | ~$29-39/mo |
| Scale | 1M | Custom |
| Enterprise | 10M | Custom |

**Với 3,000-9,000 pages/tháng → anh cần Base hoặc Scale plan**

---

## Pricing Model đề xuất cho biz của anh

### Scenario A: Bán API/service cho khách hàng

**Cost Structure:**
| Cost | Giá trị |
|------|---------|
| Parseur Base plan | ~$30-40/tháng |
| 3,000-9,000 pages | Included |
| **Cost/page | ~$0.004-0.01** |

**Pricing cho khách hàng:**
| Model | Giá đề xuất |
|-------|-------------|
| Pay-per-page | $0.02-0.05/page |
| Monthly subscription | $50-100/tháng (unlimited) |
| Enterprise | Custom |

### Scenario B: Internal use (LogiUP)

| Use case | Volume | Cost |
|----------|--------|------|
| PDF extraction nội bộ | 3,000/tháng | ~$30-40/tháng |

---

## So sánh: Build vs Buy

| Approach | Cost | Pros | Cons |
|----------|------|------|------|
| **Parseur API** | $30-40/tháng | Nhanh, reliable | Phụ thuộc bên thứ 3 |
| **Self-hosted OCR + Rules** | $10-20/tháng (VPS) | Control được | Cần dev time |
| **Self-hosted LLM** | $50-100/tháng (GPU) | Flexible, AI-powered | Cần ML expertise |

---

## Recommendation

**Với startup nhỏ (3,000 PDFs/tháng):**

1. **Short-term**: Dùng Parseur Base ($30-40/tháng)
   - Focus vào việc build product trước
   - Validate market nhanh

2. **Long-term**: Self-hosted hybrid pipeline
   - OCR (Tesseract/PaddleOCR) → $5-10/tháng
   - LLM fallback cho complex docs → $20-50/tháng
   - Tổng: $25-60/tháng

**ROI**: Self-hosted sau 6-12 tháng sẽ tiết kiệm được ~$200-400/năm

---

_Last updated: 2026-03-21_
