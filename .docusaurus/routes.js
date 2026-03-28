import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/notes/docs',
    component: ComponentCreator('/notes/docs', '88b'),
    routes: [
      {
        path: '/notes/docs',
        component: ComponentCreator('/notes/docs', 'c47'),
        routes: [
          {
            path: '/notes/docs',
            component: ComponentCreator('/notes/docs', 'c97'),
            routes: [
              {
                path: '/notes/docs/intro',
                component: ComponentCreator('/notes/docs/intro', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_10_nam_va_quyet_dinh_dun_soi_dai_duong',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_10_nam_va_quyet_dinh_dun_soi_dai_duong', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_ai_khong_thay_the_ban',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_ai_khong_thay_the_ban', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_doc_thu_hoc_bai_dun_soi_dai_duong',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_doc_thu_hoc_bai_dun_soi_dai_duong', '1cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_dun_soi_dai_duong_focus_garry_tan',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_dun_soi_dai_duong_focus_garry_tan', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_final_version',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_final_version', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_khi_dai_duong_bat_dau_soi',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_khi_dai_duong_bat_dau_soi', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_suoi_tu_nhien',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_suoi_tu_nhien', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/linkedin/linkedin_post_tu_nhien_ca_nhan_hoa',
                component: ComponentCreator('/notes/docs/linkedin/linkedin_post_tu_nhien_ca_nhan_hoa', '812'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf_extraction_pipeline/analysis/pricing_model',
                component: ComponentCreator('/notes/docs/research/pdf_extraction_pipeline/analysis/pricing_model', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf_extraction_pipeline/plan',
                component: ComponentCreator('/notes/docs/research/pdf_extraction_pipeline/plan', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf-extraction-accuracy-2025',
                component: ComponentCreator('/notes/docs/research/pdf-extraction-accuracy-2025', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf-extraction-research',
                component: ComponentCreator('/notes/docs/research/pdf-extraction-research', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf-ocr-engines-deep-dive',
                component: ComponentCreator('/notes/docs/research/pdf-ocr-engines-deep-dive', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf-pipeline-research',
                component: ComponentCreator('/notes/docs/research/pdf-pipeline-research', 'c1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/notes/docs/research/pdf-pipeline-research-report',
                component: ComponentCreator('/notes/docs/research/pdf-pipeline-research-report', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/notes/',
    component: ComponentCreator('/notes/', '207'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
