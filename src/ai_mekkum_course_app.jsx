// ai_mekkum_course_app.jsx
// ------------------------------------------------------
// 🌿 AI MEKKUM LIFE+ 10주 자동화 교육 웹코스 (단일파일 버전)
// 기술 중심 포트폴리오형 학습 웹앱
// ------------------------------------------------------

import React, { useState } from "react";
import { motion } from "framer-motion";

// 🎨 기본 UI 컴포넌트  
const Section = ({ title, children }) => (
  <div className="mb-8">
    {title && <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h2>}
    {children}
  </div>
);

// 🧭 주차별 커리큘럼 데이터 (4단계 학습 구조)
const weeks = [
  {
    week: 1,
    emoji: "💬",
    title: "AI 루틴 시작하기",
    goal: "검색과 대화 중심 AI 활용 습관 만들기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "AI와 대화하는 방법을 배웁니다", 
        tool: "ChatGPT, Gemini",
        theory: [
          { 
            icon: "🤖",
            title: "ChatGPT가 뭔가요?", 
            content: "카카오톡처럼 대화하는 AI입니다. 질문하면 답변해주고, 글도 써주고, 번역도 해줍니다.",
            example: "예: '오늘 저녁 뭐 먹을까?' → AI가 메뉴 추천"
          },
          { 
            icon: "💬",
            title: "어떻게 질문하나요?", 
            content: "구체적으로 물어볼수록 좋은 답을 얻습니다.",
            example: "나쁜 예: '맛있는 음식'\n좋은 예: '4인 가족이 30분 안에 만들 수 있는 한식 저녁 메뉴'"
          },
          { 
            icon: "✨",
            title: "무료로 쓸 수 있나요?", 
            content: "네! ChatGPT와 Gemini 모두 무료 버전이 있습니다. 회원가입만 하면 바로 사용 가능합니다.",
            example: "구글 계정으로 간편 로그인"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "AI 서비스에 직접 가입하고 다양한 질문을 해보세요", 
        tool: "ChatGPT, Gemini",
        services: [
          {
            name: "ChatGPT",
            icon: "💬",
            desc: "OpenAI의 대화형 AI - 창의적 글쓰기, 코드 생성, 문제 해결",
            url: "https://chat.openai.com"
          },
          {
            name: "Google Gemini",
            icon: "✨",
            desc: "Google의 AI 어시스턴트 - 정보 검색, Google 서비스 연동",
            url: "https://gemini.google.com"
          },
          {
            name: "Claude",
            icon: "🤖",
            desc: "Anthropic의 AI - 긴 문서 분석, 안전한 대화",
            url: "https://claude.ai"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "프롬프트 생성기로 나만의 질문 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "topic", label: "질문 주제", type: "text", placeholder: "예: 건강 관리" },
            { name: "goal", label: "원하는 결과", type: "text", placeholder: "예: 운동 계획 세우기" },
            { name: "detail", label: "추가 정보", type: "textarea", placeholder: "예: 50대 남성, 무릎이 약함" }
          ],
          template: "당신은 {topic} 전문가입니다. {goal}을(를) 도와주세요. 고려사항: {detail}\n\n구체적이고 실행 가능한 답변을 3단계로 나누어 설명해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI를 활용한 실제 비즈니스 사례를 확인하고 영감을 얻으세요", 
        tool: "ChatGPT + Notion", 
        output: "AI 일상 요약 리포트",
        examples: [
          {
            title: "AI로 월 300만원 버는 60대",
            desc: "ChatGPT로 블로그 글 작성 후 애드센스 수익 창출",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=ChatGPT+%EB%B8%94%EB%A1%9C%EA%B7%B8+%EC%88%98%EC%9D%B5"
          },
          {
            title: "AI 글쓰기로 전자책 출간",
            desc: "ChatGPT로 요리책 집필 → 크몽·텀블벅 판매",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "AI 활용 노하우 유튜브 채널",
            desc: "중장년층을 위한 AI 활용법 강의",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=%EC%A4%91%EC%9E%A5%EB%85%84+AI+%ED%99%9C%EC%9A%A9%EB%B2%95"
          }
        ]
      }
    }
  },
  {
    week: 2,
    emoji: "🔍",
    title: "정보검색 자동화",
    goal: "Google/Naver 검색을 AI로 자동화하기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "뉴스를 자동으로 받는 방법을 배웁니다", 
        tool: "Google Alerts, 네이버",
        theory: [
          { 
            icon: "🔔",
            title: "Google Alerts가 뭔가요?", 
            content: "관심 있는 단어를 등록하면 새 뉴스가 나올 때마다 이메일로 알려주는 무료 서비스입니다.",
            example: "예: '부동산' 등록 → 부동산 뉴스 매일 이메일로 받기"
          },
          { 
            icon: "📰",
            title: "네이버에서도 되나요?", 
            content: "네! 네이버 앱에서 관심 키워드를 검색하고 '알림 받기'를 켜면 됩니다.",
            example: "네이버 > 검색 > 종 모양 아이콘 클릭"
          },
          { 
            icon: "⏰",
            title: "얼마나 자주 받나요?", 
            content: "하루 한 번, 일주일에 한 번 등 원하는 대로 설정할 수 있습니다.",
            example: "너무 많으면 부담스러우니 '일주일에 한 번'이 좋아요"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "Google Alerts로 관심 키워드를 등록하고 자동 알림을 받아보세요", 
        tool: "Google Alerts, 네이버",
        services: [
          {
            name: "Google Alerts",
            icon: "🔔",
            desc: "키워드 기반 자동 뉴스 알림 서비스",
            url: "https://www.google.com/alerts"
          },
          {
            name: "네이버 뉴스",
            icon: "📰",
            desc: "네이버에서 관심 키워드 검색 및 구독",
            url: "https://news.naver.com"
          },
          {
            name: "YouTube 구독",
            icon: "�",
            desc: "관심 채널 구독으로 자동 업데이트 받기",
            url: "https://www.youtube.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "뉴스 요약 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "keyword", label: "관심 키워드", type: "text", placeholder: "예: 부동산, AI기술, 건강" },
            { name: "period", label: "기간", type: "select", options: ["오늘", "이번 주", "이번 달"], placeholder: "기간 선택" },
            { name: "format", label: "요약 형식", type: "text", placeholder: "예: 3줄 요약" }
          ],
          template: "{keyword}에 대한 {period} 주요 뉴스를 찾아서 {format} 형식으로 정리해주세요. 각 뉴스는 제목, 핵심 내용, 출처를 포함해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 정보 수집으로 수익 창출하기", 
        tool: "ChatGPT + 블로그", 
        output: "AI 뉴스 요약메일",
        examples: [
          {
            title: "AI 뉴스레터로 구독료 받기",
            desc: "매일 AI 트렌드 요약 → 유료 구독 모델",
            type: "비즈니스",
            link: "https://www.stibee.com"
          },
          {
            title: "부동산 정보 큐레이션",
            desc: "지역별 부동산 뉴스 정리 → 중개사에 판매",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EB%B6%80%EB%8F%99%EC%82%B0+%EC%A0%95%EB%B3%B4+AI"
          },
          {
            title: "틈새 시장 정보 중개",
            desc: "특정 산업 뉴스 모니터링 서비스",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EB%89%B4%EC%8A%A4+%EC%88%98%EC%A7%91+%EC%9E%90%EB%8F%99%ED%99%94"
          }
        ]
      }
    }
  },
  {
    week: 3,
    emoji: "📝",
    title: "문서작성 자동화",
    goal: "보고서와 이메일을 AI로 빠르게 작성하기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "AI로 글 쓰는 방법을 배웁니다", 
        tool: "ChatGPT, Google Docs",
        theory: [
          { 
            icon: "✍️",
            title: "AI가 글을 써준다고요?", 
            content: "네! 이메일, 보고서, 편지 등 어떤 글이든 AI에게 부탁하면 초안을 만들어줍니다.",
            example: "예: '팀장님께 드릴 주간 보고서 써줘' → 보고서 완성"
          },
          { 
            icon: "📝",
            title: "어떻게 부탁하나요?", 
            content: "누구에게, 무슨 내용을 쓸지 알려주면 됩니다.",
            example: "'고객님께 보낼 감사 인사 편지, 따뜻한 말투로'"
          },
          { 
            icon: "🔄",
            title: "마음에 안 들면요?", 
            content: "다시 써달라고 하거나, 수정 요청하면 됩니다. '더 짧게', '존댓말로' 등",
            example: "무한 수정 가능! 부담 없이 요청하세요"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "ChatGPT로 다양한 문서를 작성하고 Google Docs와 연동해보세요", 
        tool: "ChatGPT, Google Docs",
        services: [
          {
            name: "ChatGPT (문서 작성)",
            icon: "📝",
            desc: "AI로 보고서, 이메일, 제안서 초안 작성",
            url: "https://chat.openai.com"
          },
          {
            name: "Google Docs",
            icon: "📄",
            desc: "클라우드 문서 편집 및 공유",
            url: "https://docs.google.com"
          },
          {
            name: "Notion AI",
            icon: "✍️",
            desc: "Notion 내장 AI로 문서 작성 및 정리",
            url: "https://www.notion.so"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "보고서 작성 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "docType", label: "문서 종류", type: "text", placeholder: "예: 주간 업무 보고서, 제안서" },
            { name: "target", label: "대상", type: "text", placeholder: "예: 팀장님, 고객사" },
            { name: "content", label: "주요 내용", type: "textarea", placeholder: "예: 이번 주 완료 업무 3개, 다음 주 계획" }
          ],
          template: "{target}에게 제출할 {docType}를 작성해주세요.\n\n포함 내용:\n{content}\n\n형식: 1) 요약, 2) 상세 내용, 3) 다음 단계로 구성하고, 전문적이면서 간결하게 작성해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 글쓰기로 수익 만들기", 
        tool: "ChatGPT + Google Docs", 
        output: "업무 리포트 템플릿",
        examples: [
          {
            title: "문서 대필 서비스",
            desc: "기업 보고서, 제안서 작성 대행",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "전자책 출간",
            desc: "ChatGPT로 시리즈 책 집필 → 교보문고 판매",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=ChatGPT+%EC%A0%84%EC%9E%90%EC%B1%85+%EC%B6%9C%EA%B0%84"
          },
          {
            title: "AI 글쓰기 강의",
            desc: "문서 작성 노하우를 온라인 강의로",
            type: "YouTube",
            link: "https://class101.net"
          }
        ]
      }
    }
  },
  {
    week: 4,
    emoji: "📊",
    title: "데이터 분석 루틴",
    goal: "가계부와 건강 데이터를 AI로 분석하기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "가계부를 AI로 분석하는 방법을 배웁니다", 
        tool: "Google Sheets, ChatGPT",
        theory: [
          { 
            icon: "💰",
            title: "AI가 가계부를 봐준다고요?", 
            content: "네! 지출 내역을 보여주면 어디서 많이 쓰는지, 어떻게 절약할지 알려줍니다.",
            example: "예: 한 달 지출 입력 → '식비가 많네요, OO 줄이면 월 15만원 절약'"
          },
          { 
            icon: "📊",
            title: "표(엑셀)를 못 만드는데요?", 
            content: "Google Sheets(무료 엑셀)에 날짜, 항목, 금액만 적으면 됩니다. ChatGPT가 분석해줍니다.",
            example: "2025-01-15 | 점심 | 8,000원"
          },
          { 
            icon: "📈",
            title: "그래프도 만들어주나요?", 
            content: "네! ChatGPT에 표를 복사해서 넣으면 그래프와 분석 리포트를 자동으로 만들어줍니다.",
            example: "복사 → 붙여넣기 → 분석 완료!"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "Google Sheets에 데이터를 정리하고 ChatGPT로 분석해보세요", 
        tool: "Google Sheets, ChatGPT",
        services: [
          {
            name: "Google Sheets",
            icon: "📊",
            desc: "클라우드 스프레드시트 - 데이터 입력 및 관리",
            url: "https://sheets.google.com"
          },
          {
            name: "ChatGPT (데이터 분석)",
            icon: "📈",
            desc: "Code Interpreter로 데이터 분석 및 시각화",
            url: "https://chat.openai.com"
          },
          {
            name: "Google Data Studio",
            icon: "📉",
            desc: "데이터 시각화 대시보드 제작",
            url: "https://datastudio.google.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "데이터 분석 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "dataType", label: "데이터 종류", type: "text", placeholder: "예: 월간 지출 내역" },
            { name: "analysis", label: "분석 목적", type: "text", placeholder: "예: 절약 포인트 찾기" },
            { name: "detail", label: "구체적 질문", type: "textarea", placeholder: "예: 어디서 가장 많이 쓰는지, 줄일 수 있는 항목은?" }
          ],
          template: "다음 {dataType} 데이터를 분석해주세요:\n[여기에 데이터 붙여넣기]\n\n분석 목적: {analysis}\n구체적 질문: {detail}\n\n결과를 1) 요약, 2) 패턴 발견, 3) 실행 가능한 조언 순서로 제시해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 데이터 분석 서비스", 
        tool: "ChatGPT + Google Sheets", 
        output: "소비리포트 PDF",
        examples: [
          {
            title: "개인 재무 컨설팅",
            desc: "AI 분석 기반 가계부 코칭 서비스",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "소상공인 매출 분석",
            desc: "매장 데이터 분석 후 개선안 제시",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8+AI+%EB%8D%B0%EC%9D%B4%ED%84%B0"
          },
          {
            title: "AI 재테크 상담",
            desc: "지출 패턴 분석으로 절약 컨설팅",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EC%9E%AC%ED%85%8C%ED%81%AC"
          }
        ]
      }
    }
  },
  {
    week: 5,
    emoji: "🍎",
    title: "식단·건강 코파일럿",
    goal: "Gemini와 Calendar로 건강관리 자동화",
    stages: {
      foundation: { 
        title: "기초", 
        content: "AI로 식단표 만드는 방법을 배웁니다", 
        tool: "Gemini, Google Calendar",
        theory: [
          { 
            icon: "🍱",
            title: "AI가 식단을 짜준다고요?", 
            content: "네! '당뇨 있는 부부 2명 식단'처럼 조건을 말하면 일주일 식단을 만들어줍니다.",
            example: "예: 칼로리, 영양소, 조리법까지 다 알려줌"
          },
          { 
            icon: "📅",
            title: "캘린더에 넣을 수 있나요?", 
            content: "네! Google Calendar에 복사하면 매일 식단 알림을 받을 수 있습니다.",
            example: "월요일 저녁: 삼치구이 + 시금치나물"
          },
          { 
            icon: "🛒",
            title: "장보기 목록도 만들어주나요?", 
            content: "물론이죠! AI에게 '이 식단으로 장보기 목록 만들어줘'라고 하면 됩니다.",
            example: "삼치 2마리, 시금치 1단..."
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "Gemini로 식단을 계획하고 캘린더에 등록해보세요", 
        tool: "Gemini, Google Calendar",
        services: [
          {
            name: "Google Gemini",
            icon: "🍱",
            desc: "AI로 맞춤형 식단 추천 및 영양 정보 제공",
            url: "https://gemini.google.com"
          },
          {
            name: "Google Calendar",
            icon: "📅",
            desc: "식단 일정 등록 및 가족 공유",
            url: "https://calendar.google.com"
          },
          {
            name: "MyFitnessPal",
            icon: "💪",
            desc: "칼로리 및 영양소 추적 앱",
            url: "https://www.myfitnesspal.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "맞춤형 식단 프롬프트 만들기", 
        tool: "Gemini",
        promptGenerator: {
          fields: [
            { name: "people", label: "인원/나이", type: "text", placeholder: "예: 50대 부부" },
            { name: "condition", label: "건강 상태", type: "text", placeholder: "예: 당뇨, 고혈압" },
            { name: "preference", label: "선호 음식", type: "textarea", placeholder: "예: 한식 선호, 매운 음식 안 됨" }
          ],
          template: "{people}를 위한 일주일 식단을 짜주세요.\n\n고려사항:\n- 건강 상태: {condition}\n- 선호/제한: {preference}\n\n각 식사마다 1) 메뉴명, 2) 간단한 조리법, 3) 영양 정보를 포함해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 식단 관리 서비스", 
        tool: "Gemini + Calendar", 
        output: "AI 식단표",
        examples: [
          {
            title: "맞춤형 식단 코칭",
            desc: "AI 기반 개인 영양 관리 서비스",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "당뇨 환자 식단 관리",
            desc: "AI로 혈당 관리 식단 제공",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EB%8B%B9%EB%87%A8+%EC%8B%9D%EB%8B%A8+AI"
          },
          {
            title: "가족 건강 식단 채널",
            desc: "AI 식단 레시피 공유 유튜브",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EA%B1%B4%EA%B0%95+%EC%8B%9D%EB%8B%A8"
          }
        ]
      }
    }
  },
  {
    week: 6,
    emoji: "🎬",
    title: "가족스토리 영상",
    goal: "AI로 사진을 영상과 스토리로 만들기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "사진으로 영상 만드는 방법을 배웁니다", 
        tool: "Canva, ChatGPT",
        theory: [
          { 
            icon: "📸",
            title: "사진만 있으면 영상이 된다고요?", 
            content: "네! Canva(무료 디자인 툴)로 사진에 음악과 글을 넣어 영상을 만들 수 있습니다.",
            example: "예: 가족 여행 사진 10장 → 1분 추억 영상"
          },
          { 
            icon: "🎬",
            title: "어떻게 만드나요?", 
            content: "Canva에서 '영상' 템플릿 선택 → 사진 업로드 → 음악 추가 → 완성!",
            example: "스마트폰으로도 쉽게 만들 수 있어요"
          },
          { 
            icon: "✍️",
            title: "나레이션도 넣을 수 있나요?", 
            content: "ChatGPT에게 대본 부탁 → 휴대폰으로 녹음 → Canva에 추가하면 됩니다.",
            example: "'우리 가족 여행 추억 영상 대본 써줘'"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "Canva와 ChatGPT로 스토리 콘텐츠를 만들어보세요", 
        tool: "Canva, ChatGPT, D-ID",
        services: [
          {
            name: "Canva",
            icon: "🎨",
            desc: "무료 디자인 툴 - 사진 편집, 영상 제작",
            url: "https://www.canva.com"
          },
          {
            name: "ChatGPT (스토리 작성)",
            icon: "✍️",
            desc: "AI로 감동적인 스토리 대본 작성",
            url: "https://chat.openai.com"
          },
          {
            name: "D-ID",
            icon: "🎬",
            desc: "사진을 말하는 AI 아바타 영상으로 변환",
            url: "https://www.d-id.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "영상 스토리 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "theme", label: "영상 주제", type: "text", placeholder: "예: 우리 가족 여행 추억" },
            { name: "photos", label: "사진 설명", type: "textarea", placeholder: "예: 바닷가, 아이들 놀이, 저녁 식사 장면" },
            { name: "tone", label: "분위기", type: "text", placeholder: "예: 따뜻하고 감동적인" }
          ],
          template: "{theme}를 주제로 사진 영상의 나레이션 대본을 작성해주세요.\n\n사진 내용: {photos}\n원하는 분위기: {tone}\n\n각 장면마다 15-20초 분량의 대사를 작성하고, 시작과 끝에 인사말을 넣어주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 영상 제작 서비스", 
        tool: "Canva + ChatGPT", 
        output: "가족 스토리 영상",
        examples: [
          {
            title: "추모 영상 제작 서비스",
            desc: "고인 사진으로 추억 영상 제작",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "가족 이벤트 영상",
            desc: "생일, 기념일 맞춤 영상 제작",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EA%B0%80%EC%A1%B1+%EC%B6%94%EC%96%B5+%EC%98%81%EC%83%81"
          },
          {
            title: "AI 영상 제작 튜토리얼",
            desc: "Canva 영상 제작 강의",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=Canva+%EC%98%81%EC%83%81+%EB%A7%8C%EB%93%A4%EA%B8%B0"
          }
        ]
      }
    }
  },
  {
    week: 7,
    emoji: "✍️",
    title: "콘텐츠 자동화",
    goal: "카드뉴스와 블로그를 AI로 제작하기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "블로그와 SNS 글 쓰는 방법을 배웁니다", 
        tool: "ChatGPT, Canva",
        theory: [
          { 
            icon: "📱",
            title: "카드뉴스가 뭔가요?", 
            content: "인스타그램, 페이스북에서 보는 슬라이드 형식의 정보 콘텐츠입니다.",
            example: "예: '건강한 아침 루틴 5가지' → 5장짜리 이미지"
          },
          { 
            icon: "🎨",
            title: "디자인을 못 하는데요?", 
            content: "Canva에 예쁜 템플릿이 수천 개 있습니다. 글만 바꾸면 완성!",
            example: "템플릿 선택 → 글 수정 → 다운로드"
          },
          { 
            icon: "✍️",
            title: "글은 AI가 써주나요?", 
            content: "네! ChatGPT에게 '50대 건강 관리 블로그 글 써줘'라고 하면 됩니다.",
            example: "주제만 정하면 AI가 다 써줍니다"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "ChatGPT와 Canva로 블로그와 카드뉴스를 제작해보세요", 
        tool: "ChatGPT, Canva",
        services: [
          {
            name: "Canva (카드뉴스)",
            icon: "📱",
            desc: "템플릿 기반 카드뉴스 디자인",
            url: "https://www.canva.com/create/card-news/"
          },
          {
            name: "네이버 블로그",
            icon: "📝",
            desc: "한국 최대 블로그 플랫폼",
            url: "https://blog.naver.com"
          },
          {
            name: "ChatGPT (콘텐츠 작성)",
            icon: "✍️",
            desc: "블로그 주제, 목차, 본문 자동 생성",
            url: "https://chat.openai.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "블로그 콘텐츠 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "topic", label: "블로그 주제", type: "text", placeholder: "예: 50대를 위한 건강 관리" },
            { name: "keyword", label: "핵심 키워드", type: "text", placeholder: "예: 중년 건강, 운동, 영양" },
            { name: "audience", label: "독자층", type: "text", placeholder: "예: 40-60대 여성" }
          ],
          template: "'{topic}'에 대한 블로그 글을 작성해주세요.\n\nSEO 키워드: {keyword}\n타겟 독자: {audience}\n\n구성: 1) 공감 가는 도입부, 2) 핵심 정보 3-5가지, 3) 실천 방법, 4) 마무리. 1500자 이내로 친근하고 이해하기 쉽게 작성해주세요."
        }
      },
      application: { 
        title: "응용", 
        content: "AI 콘텐츠로 수익 만들기", 
        tool: "ChatGPT + Canva", 
        output: "카드뉴스 세트",
        examples: [
          {
            title: "블로그 애드센스 수익",
            desc: "AI 글쓰기로 일 3개 포스팅 → 월 100만원",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EB%B8%94%EB%A1%9C%EA%B7%B8+%EC%95%A0%EB%93%9C%EC%84%BC%EC%8A%A4"
          },
          {
            title: "인스타그램 마케팅",
            desc: "AI 카드뉴스로 제품 홍보",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "AI 콘텐츠 제작 대행",
            desc: "소상공인 SNS 콘텐츠 제작 서비스",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EC%BD%98%ED%85%90%EC%B8%A0+%EC%A0%9C%EC%9E%91"
          }
        ]
      }
    }
  },
  {
    week: 8,
    emoji: "📅",
    title: "일정공유 자동화",
    goal: "Google Calendar와 KakaoTalk으로 일정 자동 공유",
    stages: {
      foundation: { 
        title: "기초", 
        content: "일정을 자동으로 알려주는 방법을 배웁니다", 
        tool: "Google Calendar, 카카오톡",
        theory: [
          { 
            icon: "📅",
            title: "Google 캘린더가 뭔가요?", 
            content: "스마트폰 기본 달력처럼 일정을 기록하는 무료 서비스입니다. 가족과 공유도 됩니다.",
            example: "예: 병원 예약, 손주 생일 등 기록"
          },
          { 
            icon: "⏰",
            title: "알림을 자동으로 보낼 수 있나요?", 
            content: "네! AI가 내일 일정을 정리해서 카카오톡으로 보내줄 수 있습니다.",
            example: "'내일 오전 10시 병원, 오후 3시 손주 픽업'"
          },
          { 
            icon: "👨‍👩‍👧‍👦",
            title: "가족도 볼 수 있나요?", 
            content: "캘린더를 공유하면 모두 같은 일정을 볼 수 있습니다.",
            example: "부부가 함께 쓰거나 자녀와 공유"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "Google Calendar API를 사용하여 일정을 조회하고 관리해보세요", 
        tool: "Google Calendar, Apps Script",
        services: [
          {
            name: "Google Calendar",
            icon: "📅",
            desc: "일정 관리 및 공유 플랫폼",
            url: "https://calendar.google.com"
          },
          {
            name: "Google Apps Script",
            icon: "⚙️",
            desc: "Calendar API 자동화 스크립트 작성",
            url: "https://script.google.com"
          },
          {
            name: "Kakao Developers",
            icon: "💬",
            desc: "KakaoTalk 메시지 API 개발",
            url: "https://developers.kakao.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "일정 알림 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "event", label: "일정 내용", type: "textarea", placeholder: "예: 내일 오전 10시 병원, 오후 3시 손자 픽업" },
            { name: "recipient", label: "받는 사람", type: "text", placeholder: "예: 가족, 팀원" },
            { name: "tone", label: "메시지 톤", type: "text", placeholder: "예: 다정한, 격식있는" }
          ],
          template: "{recipient}에게 보낼 일정 알림 메시지를 작성해주세요.\n\n일정:\n{event}\n\n메시지 톤: {tone}\n형식: 인사 → 일정 요약 → 준비사항 → 마무리 인사"
        }
      },
      application: { 
        title: "응용", 
        content: "AI 일정 관리 서비스", 
        tool: "Google Calendar + ChatGPT", 
        output: "AI 일정메시지",
        examples: [
          {
            title: "가족 일정 관리 서비스",
            desc: "노부모 일정을 자동으로 정리해서 알림",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "시니어 케어 서비스",
            desc: "병원 예약, 약 복용 시간 자동 알림",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=%EC%8B%9C%EB%8B%88%EC%96%B4+%EC%BC%80%EC%96%B4+AI"
          },
          {
            title: "비서 서비스 창업",
            desc: "바쁜 직장인 일정 대리 관리",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EB%B9%84%EC%84%9C+%EC%84%9C%EB%B9%84%EC%8A%A4"
          }
        ]
      }
    }
  },
  {
    week: 9,
    emoji: "🤖",
    title: "나만의 비서 만들기",
    goal: "GPTs 또는 Gemini Gems로 개인 비서 제작",
    stages: {
      foundation: { 
        title: "기초", 
        content: "나만의 AI 비서 만드는 방법을 배웁니다", 
        tool: "ChatGPT GPTs, Gemini",
        theory: [
          { 
            icon: "🤖",
            title: "AI 비서가 뭔가요?", 
            content: "나만 쓰는 특별한 ChatGPT입니다. 내가 원하는 방식으로 대답하도록 만들 수 있어요.",
            example: "예: '건강 코치 AI', '요리 선생님 AI'"
          },
          { 
            icon: "⚙️",
            title: "어떻게 만드나요?", 
            content: "ChatGPT에서 'GPT 만들기' 버튼 클릭 → AI에게 역할 설명 → 완성!",
            example: "'당신은 친절한 건강 코치입니다' 입력"
          },
          { 
            icon: "📚",
            title: "내 자료를 학습시킬 수 있나요?", 
            content: "네! PDF나 문서를 업로드하면 그 내용을 기반으로 답변합니다.",
            example: "예: 레시피 책 업로드 → AI가 그 레시피로만 답변"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "GPT Builder로 나만의 맞춤형 AI를 만들어보세요", 
        tool: "ChatGPT GPTs",
        services: [
          {
            name: "ChatGPT GPT Builder",
            icon: "🤖",
            desc: "맞춤형 AI 어시스턴트 제작",
            url: "https://chat.openai.com/gpts/editor"
          },
          {
            name: "OpenAI Actions",
            icon: "🔗",
            desc: "외부 API와 GPT 연동",
            url: "https://platform.openai.com/docs/actions"
          },
          {
            name: "Google Gemini",
            icon: "✨",
            desc: "Google Workspace와 통합된 AI",
            url: "https://gemini.google.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "맞춤형 GPT 지시사항 프롬프트 만들기", 
        tool: "ChatGPT GPTs",
        promptGenerator: {
          fields: [
            { name: "role", label: "AI 역할", type: "text", placeholder: "예: 친절한 건강 코치" },
            { name: "expertise", label: "전문 분야", type: "text", placeholder: "예: 50대 건강 관리, 식단 조언" },
            { name: "style", label: "말투/스타일", type: "textarea", placeholder: "예: 격려하는 톤, 쉬운 설명, 이모지 사용" }
          ],
          template: "당신은 {role}입니다.\n\n전문 분야: {expertise}\n\n말투와 스타일:\n{style}\n\n사용자의 질문에 항상 1) 공감, 2) 구체적 조언, 3) 격려로 답변하세요."
        }
      },
      application: { 
        title: "응용", 
        content: "맞춤형 GPT로 수익 창출하기", 
        tool: "ChatGPT GPTs", 
        output: "생활 코파일럿 GPT",
        examples: [
          {
            title: "GPT 스토어 판매",
            desc: "특화된 GPT를 만들어 수익 배분",
            type: "비즈니스",
            link: "https://chat.openai.com/gpts"
          },
          {
            title: "전문가 GPT 컨설팅",
            desc: "기업/개인에게 맞춤 GPT 제작 대행",
            type: "사례",
            link: "https://kmong.com"
          },
          {
            title: "GPT 활용 교육",
            desc: "GPT 제작 방법 강의 콘텐츠",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=ChatGPT+GPT+%EB%A7%8C%EB%93%A4%EA%B8%B0"
          }
        ]
      }
    }
  },
  {
    week: 10,
    emoji: "🚀",
    title: "서비스화 프로젝트",
    goal: "AI 루틴을 실제 서비스로 확장하기",
    stages: {
      foundation: { 
        title: "기초", 
        content: "AI로 돈 버는 방법을 배웁니다", 
        tool: "Notion, Canva",
        theory: [
          { 
            icon: "💰",
            title: "AI로 정말 돈을 벌 수 있나요?", 
            content: "네! 많은 분들이 AI 서비스로 부업하거나 창업합니다. 크몽, 탈잉 등에서 판매 가능합니다.",
            example: "예: AI 글쓰기 대행, 카드뉴스 제작 서비스"
          },
          { 
            icon: "🎯",
            title: "어떻게 시작하나요?", 
            content: "1) 내가 잘하는 것 찾기 → 2) AI로 빠르게 만들기 → 3) 크몽에 등록",
            example: "예: 결혼식 축사 작성 서비스 (1건 2만원)"
          },
          { 
            icon: "📈",
            title: "어떤 서비스가 잘 팔리나요?", 
            content: "문서 작성, 블로그 글, 카드뉴스, 번역 등이 인기입니다.",
            example: "월 50만원 → 100만원 가능"
          }
        ]
      },
      practice: { 
        title: "실전", 
        content: "서비스 프로토타입을 기획하고 개발 환경을 준비하세요", 
        tool: "Notion, Figma, Vercel",
        services: [
          {
            name: "Notion",
            icon: "📝",
            desc: "서비스 기획 문서 및 로드맵 작성",
            url: "https://www.notion.so"
          },
          {
            name: "Figma",
            icon: "🎨",
            desc: "UI/UX 디자인 프로토타입 제작",
            url: "https://www.figma.com"
          },
          {
            name: "Vercel",
            icon: "🚀",
            desc: "웹 서비스 무료 배포 플랫폼",
            url: "https://vercel.com"
          }
        ]
      },
      advanced: { 
        title: "심화", 
        content: "서비스 소개 프롬프트 만들기", 
        tool: "ChatGPT",
        promptGenerator: {
          fields: [
            { name: "service", label: "서비스명", type: "text", placeholder: "예: AI 건강 비서" },
            { name: "problem", label: "해결하는 문제", type: "textarea", placeholder: "예: 중장년층이 건강 관리를 어려워함" },
            { name: "solution", label: "핵심 기능", type: "textarea", placeholder: "예: AI 식단 추천, 운동 알림, 건강 데이터 분석" }
          ],
          template: "'{service}'라는 서비스를 소개하는 3분 발표 대본을 작성해주세요.\n\n해결하는 문제:\n{problem}\n\n핵심 기능:\n{solution}\n\n구성: 1) 문제 공감, 2) 솔루션 소개, 3) 시연 설명, 4) 향후 계획"
        }
      },
      application: { 
        title: "응용", 
        content: "AI 서비스 사업화 사례", 
        tool: "Notion, Canva, YouTube", 
        output: "나의 AI 서비스 시연",
        examples: [
          {
            title: "AI 서비스 창업 성공기",
            desc: "중장년 AI 학습 플랫폼 → 월 1000만원",
            type: "사례",
            link: "https://www.youtube.com/results?search_query=AI+%EC%84%9C%EB%B9%84%EC%8A%A4+%EC%B0%BD%EC%97%85"
          },
          {
            title: "크몽에서 AI 서비스 판매",
            desc: "AI 자동화 구축 대행 서비스",
            type: "비즈니스",
            link: "https://kmong.com"
          },
          {
            title: "AI 서비스 런칭 가이드",
            desc: "서비스 기획부터 출시까지 전 과정",
            type: "YouTube",
            link: "https://www.youtube.com/results?search_query=AI+%EC%84%9C%EB%B9%84%EC%8A%A4+%EB%A7%8C%EB%93%A4%EA%B8%B0"
          }
        ]
      }
    }
  },
];

// 🧠 루틴 예시 데이터
const routines = [
  { name: "AI Tomorrow Talk", desc: "내일 일정 요약·가족공유", tech: "Gemini + Google Calendar + KakaoTalk API" },
  { name: "Smart Report", desc: "회의록→보고서 자동화", tech: "ChatGPT + Docs + Drive" },
  { name: "Mail Digest", desc: "이메일 요약 자동 리포트", tech: "ChatGPT + Gmail API" },
  { name: "Family Album", desc: "사진→AI 영상 생성", tech: "D-ID + Canva + Drive" },
  { name: "Budget Insight", desc: "가계부·소비 분석 자동화", tech: "ChatGPT Code Interpreter + Sheets" },
];

// 주차별 상세 페이지 컴포넌트
function WeekDetailPage({ weekData, weeks, onBack, onWeekChange }) {
  const [currentStage, setCurrentStage] = useState("foundation");
  const [promptInputs, setPromptInputs] = useState({});
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 주차 변경 시 스크롤 최상단으로
  const handleWeekChange = (week) => {
    onWeekChange(week);
    window.scrollTo(0, 0);
    setSidebarOpen(false); // 모바일에서 사이드바 닫기
  };

  const stageColors = {
    foundation: "bg-green-50 border-green-200 text-green-700",
    practice: "bg-blue-50 border-blue-200 text-blue-700",
    advanced: "bg-purple-50 border-purple-200 text-purple-700",
    application: "bg-orange-50 border-orange-200 text-orange-700"
  };

  const stageIcons = {
    foundation: "📚",
    practice: "🔨",
    advanced: "🚀",
    application: "🎯"
  };

  const handleGeneratePrompt = (template, inputs) => {
    let prompt = template;
    Object.keys(inputs).forEach(key => {
      prompt = prompt.replace(`{${key}}`, inputs[key] || `[${key}]`);
    });
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert("프롬프트가 복사되었습니다! ChatGPT나 Gemini에 붙여넣기 하세요.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900 flex">
      {/* 모바일 햄버거 메뉴 */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* 왼쪽 사이드바 - 주차별 목차 */}
      <aside className={`w-64 bg-white border-r-2 border-gray-200 fixed h-screen overflow-y-auto shadow-lg transition-transform z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 border-b-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 sticky top-0 z-10">
          <button
            onClick={onBack}
            className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-semibold text-sm shadow-md"
          >
            ← 전체 커리큘럼으로
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📚 10주 커리큘럼</h2>
          <nav className="space-y-2">
            {weeks.map((w) => (
              <button
                key={w.week}
                onClick={() => handleWeekChange(w)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                  weekData.week === w.week
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{w.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{w.week}주차</div>
                    <div className={`text-xs mt-1 ${
                      weekData.week === w.week ? 'text-indigo-100' : 'text-gray-500'
                    }`}>
                      {w.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-600 space-y-2">
            <p className="flex items-center gap-2">
              <span>📚</span> 기초: 이론 학습
            </p>
            <p className="flex items-center gap-2">
              <span>🔨</span> 실전: 직접 실습
            </p>
            <p className="flex items-center gap-2">
              <span>🚀</span> 심화: 프롬프트 생성
            </p>
            <p className="flex items-center gap-2">
              <span>🎯</span> 응용: 수익화 사례
            </p>
          </div>
        </div>
      </aside>

      {/* 모바일 오버레이 */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 메인 컨텐츠 */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-6">
        {/* 헤더 */}
        <header className="max-w-6xl mx-auto mb-8 mt-16 lg:mt-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl lg:text-4xl font-bold text-blue-600">Week {weekData.week}</span>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">{weekData.title}</h1>
                <p className="text-sm lg:text-base text-gray-600 mt-1">🎯 {weekData.goal}</p>
              </div>
            </div>
          </div>
        </header>

      <div className="max-w-6xl mx-auto">
        {/* 4단계 탭 */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {Object.entries(weekData.stages).map(([key, stage]) => (
            <button
              key={key}
              onClick={() => setCurrentStage(key)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                currentStage === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {stageIcons[key]} {stage.title}
            </button>
          ))}
        </div>

        {/* 현재 단계 내용 */}
        {Object.entries(weekData.stages).map(([key, stage]) => (
          currentStage === key && (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{stageIcons[key]}</span>
                <h2 className="text-2xl font-bold text-gray-800">{stage.title} 단계</h2>
              </div>

              {/* 기초: 이론 학습 */}
              {key === "foundation" && stage.theory && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">📖 알아두면 좋아요</h3>
                  {stage.theory.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{item.icon || "📌"}</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                          <p className="text-gray-700 leading-relaxed mb-3">{item.content}</p>
                          {item.example && (
                            <div className="bg-white/70 border border-green-300 rounded-lg p-3 mt-2">
                              <p className="text-sm text-gray-600 whitespace-pre-line">💡 {item.example}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mt-6">
                    <p className="text-sm text-gray-700 text-center">
                      ✅ <strong>Tip:</strong> 천천히 읽어보고, 이해가 안 되면 넘어가도 괜찮아요!
                    </p>
                  </div>
                </div>
              )}

              {/* 실전: AI 서비스 링크 */}
              {key === "practice" && stage.services && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">🔨 실습하기</h3>
                  <p className="text-gray-600 mb-4">{stage.content}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {stage.services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all hover:scale-105 group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{service.icon}</span>
                          <h4 className="font-bold text-gray-800 group-hover:text-blue-600">
                            {service.name}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.desc}</p>
                        <span className="text-xs text-blue-600 font-semibold">바로가기 →</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* 심화: 프롬프트 생성기 */}
              {key === "advanced" && stage.promptGenerator && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <span className="text-6xl mb-4 block">🚀</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">프롬프트 생성기</h3>
                    <p className="text-gray-600">{stage.content}</p>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                    <h4 className="font-bold text-purple-800 mb-4">✍️ 조건 입력하기</h4>
                    <div className="space-y-4">
                      {stage.promptGenerator.fields.map((field, idx) => (
                        <div key={idx}>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {field.label}
                          </label>
                          {field.type === "textarea" ? (
                            <textarea
                              className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                              rows="3"
                              placeholder={field.placeholder}
                              onChange={(e) => setPromptInputs({...promptInputs, [field.name]: e.target.value})}
                            />
                          ) : field.type === "select" ? (
                            <select
                              className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none bg-white"
                              onChange={(e) => setPromptInputs({...promptInputs, [field.name]: e.target.value})}
                              defaultValue=""
                            >
                              <option value="" disabled>{field.placeholder}</option>
                              {field.options && field.options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                              placeholder={field.placeholder}
                              onChange={(e) => setPromptInputs({...promptInputs, [field.name]: e.target.value})}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleGeneratePrompt(stage.promptGenerator.template, promptInputs)}
                      className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                    >
                      프롬프트 생성하기
                    </button>
                  </div>

                  {generatedPrompt && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border-2 border-purple-300 rounded-xl p-6"
                    >
                      <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <span>✨</span> 생성된 프롬프트
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm whitespace-pre-wrap">
                        {generatedPrompt}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={copyToClipboard}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          📋 복사하기
                        </button>
                        <a
                          href="https://chat.openai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                        >
                          ChatGPT에서 사용 →
                        </a>
                      </div>
                    </motion.div>
                  )}

                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-sm text-gray-700">
                    💡 <strong>Tip:</strong> 생성된 프롬프트를 복사한 후, ChatGPT나 Gemini에 붙여넣기 하세요!
                  </div>
                </div>
              )}

              {/* 응용: 실제 사례 및 비즈니스 연결 */}
              {key === "application" && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <span className="text-6xl mb-4 block">🎯</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">응용: 실제 활용 사례</h3>
                    <p className="text-gray-600">{stage.content}</p>
                  </div>

                  {stage.examples && (
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      {stage.examples.map((example, idx) => (
                        <a
                          key={idx}
                          href={example.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-5 hover:shadow-xl transition-all hover:scale-105 group"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">
                              {example.type === "사례" && "👤"}
                              {example.type === "비즈니스" && "💼"}
                              {example.type === "YouTube" && "📺"}
                            </span>
                            <span className="text-xs font-bold text-orange-600 bg-white px-2 py-1 rounded-full">
                              {example.type}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600">
                            {example.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">{example.desc}</p>
                          <span className="text-xs text-orange-600 font-semibold">자세히 보기 →</span>
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                    <h4 className="font-bold text-orange-800 mb-3">📦 이번 주 최종 목표</h4>
                    <p className="text-gray-700 mb-2">
                      🛠️ <strong>활용 도구:</strong> {stage.tool}
                    </p>
                    {stage.output && (
                      <div className="bg-white border-2 border-orange-300 rounded-lg p-4 mt-4">
                        <p className="font-bold text-gray-800 mb-1">🎯 산출물</p>
                        <p className="text-sm text-gray-700">{stage.output}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-sm text-gray-700">
                    💡 <strong>Tip:</strong> 실제 사례를 참고하여 나만의 방식으로 응용해보세요. 작은 시작이 큰 수익으로 이어집니다!
                  </div>
                </div>
              )}

            </motion.div>
          )
        ))}
      </div>
      </main>
    </div>
  );
}

// 메인 페이지 컴포넌트
export default function AIMekkumCourse() {
  const [selectedWeek, setSelectedWeek] = useState(null);

  // 주차 페이지로 이동
  if (selectedWeek) {
    return (
      <WeekDetailPage 
        weekData={selectedWeek} 
        weeks={weeks}
        onBack={() => setSelectedWeek(null)}
        onWeekChange={(week) => setSelectedWeek(week)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 text-gray-900 p-6 font-sans">
      <header className="flex flex-col items-center mb-10 max-w-6xl mx-auto py-16">
        <div className="text-6xl lg:text-7xl mb-6">🌿</div>
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">AI MEKKUM LIFE+</h1>
        <p className="text-xl lg:text-2xl text-gray-700 font-light mb-3 tracking-wide">
          10주 완성 AI 자동화 코스
        </p>
        <p className="text-gray-600 text-center max-w-2xl leading-relaxed">
          AI로 배우고, 만들고, 서비스로 확장하는<br className="hidden sm:block" />
          신중년을 위한 실전 학습 프로그램
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl">
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📚</span>
              <div>
                <div className="text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">기초</div>
                <div className="text-xs text-gray-500">이론 학습</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔨</span>
              <div>
                <div className="text-sm font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">실전</div>
                <div className="text-xs text-gray-500">AI 서비스 실습</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              <div>
                <div className="text-sm font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">심화</div>
                <div className="text-xs text-gray-500">자동화 구현</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <div>
                <div className="text-sm font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">응용</div>
                <div className="text-xs text-gray-500">작업물 완성</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section title="� 10주 커리큘럼 - 순차 학습">
        <p className="text-gray-600 mb-6 text-center">
          각 주차를 클릭하여 기초부터 응용까지 단계별로 학습하세요
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {weeks.map((w) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={w.week}
              onClick={() => setSelectedWeek(w)}
              className="group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-indigo-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {w.emoji}
                </span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-sm font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">{w.week}주</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                {w.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {w.goal}
              </p>
              
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">4단계 학습</span>
                <span className="text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  시작 →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-4xl mb-4 block">🌿</span>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
              AI MEKKUM LIFE+
            </h3>
            <p className="text-gray-300 text-sm">
              신중년을 위한 실전형 AI 자동화 학습 플랫폼
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-6 border-t border-gray-700 pt-6">
            <span className="flex items-center gap-1">
              <span className="text-indigo-400">✨</span> React + Tailwind + Framer Motion
            </span>
            <span className="opacity-50">•</span>
            <span className="flex items-center gap-1">
              <span className="text-purple-400">🤖</span> Claude 4.5 + ChatGPT
            </span>
          </div>
          
          <p className="text-xs text-gray-500">
            © 2025 AI MEKKUM LIFE+ — AI Learning Portfolio Project
          </p>
        </div>
      </footer>
    </div>
  );
}
