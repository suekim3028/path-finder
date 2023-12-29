## 2023 GDSCx알파코 나무톤 - 오솔길 (잭과콩나무)


## 1. 프로젝트 소개

### 데모
<img src="https://github.com/suekim3028/path-finder/assets/47552580/aa04de55-057c-481f-9b76-e13a71f9b2dc" width="240" height="400"/>
<img src="https://github.com/suekim3028/path-finder/assets/47552580/d9b1ee69-3874-48c3-8dc9-9468d1d4a52b" width="240" height="400"/>
<img src="https://github.com/suekim3028/path-finder/assets/51940808/a0a24a3d-0367-4fb3-9ef6-d0adf0afe913" width="240" height="400"/>


### 1.1 프로젝트 개요
- 시각장애인들은 보행 중에 주변 환경을 인지하기 어려워 안전사고가 발생할 수 있습니다. 오솔길은 시각장애인들과 더불어 살아가는 세상을 만들어가기 위해, 그들의 안전한 보행을 돕고자 합니다. 오솔길은 숲 속에 난 좁고 한적한 길을 뜻하죠. 이런 오솔길처럼 저희 서비스가 시각장애인들이 걸어갈 수 있는 하나의 길이 되기를 소망합니다.

- 오솔길은 주변 환경을 인식하기 위해 카메라를 이용하여 주변 환경을 인식하고, 인식한 정보를 소리와 음성으로 변환합니다. 보행 도중 장애물이 나타나면 소리와 시각적 알림으로 알려주어 사용자가 안전하게 보행할 수 있도록 돕습니다.


### 1.2 SDGs

<img src="https://github.com/suekim3028/path-finder/assets/47552580/cd464056-db04-4822-970c-627a0cc15625" width="100" height="100"/>
<img src="https://github.com/suekim3028/path-finder/assets/47552580/808506a4-db34-41d0-9de3-c769617ce621" width="100" height="100"/>

      
- 10. Reduced Inequalities (불평등 감소)
- 11. Sustainable Cities and Communities (지속가능한 도시와 커뮤니티)

## 2. 구현 기능

### 1️⃣ 장애물 인식 및 경고 기능

핸드폰 카메라와 인공지능 기술을 활용하여 주변 환경을 실시간으로 파악합니다.
주변 환경에서 인식한 장애물을 사용자에게 소리와 시각적 알림 등으로 전달하여 주의를 줍니다.

### 2️⃣ 사물과의 거리 측정 기능

카메라로 파악한 환경 정보를 토대로 가까운 사물과 사용자 사이의 거리를 측정합니다.

## 3. 기술 스택
- Frontend: React, Next.js, Styled-Component, Google Cloud Platform
- Backend: FastAPI
- ML/AI: PyTorch, huggingface🤗, Google Cloud Platform

## 4. 팀 소개
- 팀명: 잭과콩나무(H조)
- 팀원: 김수빈 (FE), 김아현 (FE/Design), 오원준 (ML), 임예원 (ML/BE)

## 🚀 Quick start
```
uvicorn main:app

```
https://namuthon-path-finder.du.r.appspot.com/ 


