<template>
  <v-container>
    <h1>로그인 페이지</h1>
    <p>test</p>
    <v-table-row>
      <tbody>
        <tr>
          <th style="width: 10%;">
            앱 이름
          </th>
          <td style="width: 40%;">
            앱 이름
          </td>
          <th
            style="width: 10%;"
            rowspan="3"
          >
            앱 아이콘
          </th>
          <td
            rowspan="3"
            style="width: 40%;"
          >
            <ImageUploader
              :images="appIconList"
              readonly
            />
            <div class="upload-info">
              <p>100px X 100px</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 코드
          </th>
          <td style="width: 40%;">
            APP001
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 타입
          </th>
          <td style="width: 40%;">
            앱 타입
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            바로가기 링크
          </th>
          <td>
            <a
              variant="text"
              href="https://nonghyup.com"
              target="_blank"
            >
              https://nonghyup.com
            </a>
          </td>
          <th
            rowspan="3"
            style="width: 10%;"
          >
            메인 추천 이미지
          </th>
          <td
            style="width: 40%;"
            rowspan="3"
          >
            <ImageUploader
              :images="mainImgList"
              readonly
            />
            <div class="upload-info">
              <p>300px X 440px</p>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            사용 가이드 링크
          </th>
          <td style="width: 40%;">
            <a
              href="https://nonghyup.com"
              target="_blank"
            >
              https://nonghyup.com
            </a>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            플래그
          </th>
          <td style="width: 40%;">
            <div class="d-flex ga-3">
              <v-chip
                color="secondary"
                variant="flat"
              >
                추천
              </v-chip>
              <v-chip
                color="secondary"
                variant="flat"
              >
                NEW
              </v-chip>
              <v-chip
                color="secondary"
                variant="flat"
              >
                HOT
              </v-chip>
            </div>
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            추천 정보
          </th>
          <td colspan="3">
            앱 타입 / 사용자 수 / 좋아요 수
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 사용 시기
          </th>
          <td colspan="3">
            상시
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            간단 설명
          </th>
          <td colspan="3">
            농협 및 축협 이용 시 필수 예약 과정으로 편리한
            예약 신청 및 관리를 도와주는 편리한 농협 앱
          </td>
        </tr>
        <tr>
          <th style="width: 10%;">
            앱 상태
          </th>
          <td colspan="3">
            활성화
          </td>
        </tr>
      </tbody>
    </v-table-row>
  </v-container>
</template>

<script setup>

</script>
<route lang="yaml">
meta:
  layout: AuthLayout
</route>
