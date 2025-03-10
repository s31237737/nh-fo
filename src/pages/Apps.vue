<template>
  <v-carousel
    :show-arrows="false"
    height="400"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-container
    class="inner"
  >
    <!-- 앱: 전체 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          앱 전체 리스트
        </strong>
      </div>
      <!-- 앱 목록  -->
      <div class="appsLst">
        <v-row
          v-if="cardData.length"
        >
          <v-col
            v-for="(card, index) in cardData"
            :key="index"
            cols="12"
            lg="4"
          >
            <v-card
              :to="card.link"
              class="appCard"
              variant="flat"
            >
              <div class="d-flex">
                <div>
                  <v-img
                    class="thumnail"
                    :src="card.imageSrc"
                    alt="앱 아이콘"
                    cover
                  />
                </div>
                <!-- 배지 (최대 3개) -->
                <div class="flags">
                  <v-chip
                    v-for="(badge, idx) in card.badges.slice(0, 3)"
                    :key="idx"
                    :color="badge.color"
                    variant="tonal"
                    density="comfortable"
                    class="flag"
                  >
                    {{ badge.text }}
                  </v-chip>

                  <!-- 상태 배지 (필요할 때만 표시) -->
                  <v-chip
                    v-if="card.inUse"
                    class="flag"
                    density="comfortable"
                    color="primary"
                  >
                    사용중
                  </v-chip>
                </div>
              </div>
              <div class="d-flex flex-column">
                <!-- 제목 -->
                <v-card-title class="title-4 clamp2">
                  {{ card.title }}
                </v-card-title>

                <!-- 내용 -->
                <v-card-text class="text-3 clamp2">
                  {{ card.description }}
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-empty-state
          v-else
          text="‘농협' 검색결과가 없습니다."
          icon="custom:warning"
          bg-color="#FEFEFE"
        />
        <div class="appsLst_btn">
          <v-btn
            class="more"
            variant="text"
            density="compact"
          >
            더보기
            <v-icon
              icon="custom:arrow-down"
              size="24"
            />
          </v-btn>
        </div>
      </div>
      <!--// 앱 목록  -->
    </section>

    <!-- 앱: 좋아요 리스트 (최소 4개 노출)-->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          가장 많은 좋아요를 받았어요!
        </strong>
      </div>
      <!-- 앱 목록 -->
      <v-row
        class="appsLst"
      >
        <v-col
          v-for="(card, index) in cardRecommend"
          :key="index"
          cols="12"
          lg="4"
        >
          <v-card
            :to="card.link"
            class="appCard"
            variant="flat"
          >
            <div class="d-flex align-center">
              <div class="">
                <!-- btn: 좋아요 -->
                <v-btn
                  variant="text"
                  density="comfortable"
                  class="like"
                  @click.stop.prevent="incrementLikes(card)"
                >
                  <v-icon
                    icon="custom:full-heart"
                    size="32"
                  />
                  {{ card.likeCount }}
                </v-btn>
              </div>
              <!-- 배지 (최대 3개) -->
              <div class="flags">
                <v-chip
                  v-for="(badge, idx) in card.badges.slice(0, 3)"
                  :key="idx"
                  :color="badge.color"
                  variant="tonal"
                  density="comfortable"
                  class="flag"
                >
                  {{ badge.text }}
                </v-chip>

                <!-- 상태 배지 (필요할 때만 표시) -->
                <v-chip
                  v-if="card.inUse"
                  class="flag"
                  density="comfortable"
                  color="primary"
                >
                  사용중
                </v-chip>
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="context">
                <!-- 제목 -->
                <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                <v-card-title class="title-4">
                  {{ card.title }}
                </v-card-title>
              </div>
              <div class="btns">
                <v-btn
                  v-if="card.showOpenApp"
                  color="info"
                  @click.stop.prevent="alert = true"
                >
                  앱 열기
                </v-btn>
                <v-btn
                  v-else
                  color="info"
                  disabled
                >
                  신청 대기중
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!--// 앱 목록 -->
    </section>

    <!-- 앱: 많이 쓰는 리스트 -->
    <section>
      <div class="tit-wrap">
        <strong class="title-2">
          총무업무 담당자들이 자주 사용해요!
        </strong>
      </div>
      <!-- 앱 목록 -->
      <v-row
        class="appsLst"
      >
        <v-col
          v-for="(card, index) in cardRecommend"
          :key="index"
          cols="12"
          lg="4"
        >
          <v-card
            :to="card.link"
            class="appCard"
            variant="flat"
          >
            <div class="d-flex align-center">
              <div class="">
                <!-- btn: 좋아요 -->
                <v-btn
                  variant="text"
                  density="comfortable"
                  class="like"
                  @click.stop.prevent="incrementLikes(card)"
                >
                  <v-icon
                    icon="custom:full-heart"
                    size="32"
                  />
                  {{ card.likeCount }}
                </v-btn>
              </div>
              <!-- 배지 (최대 3개) -->
              <div class="flags">
                <v-chip
                  v-for="(badge, idx) in card.badges.slice(0, 3)"
                  :key="idx"
                  :color="badge.color"
                  variant="tonal"
                  density="comfortable"
                  class="flag"
                >
                  {{ badge.text }}
                </v-chip>

                <!-- 상태 배지 (필요할 때만 표시) -->
                <v-chip
                  v-if="card.inUse"
                  class="flag"
                  density="comfortable"
                  color="primary"
                >
                  사용중
                </v-chip>
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="context">
                <!-- 제목 -->
                <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                <v-card-title class="title-4">
                  {{ card.title }}
                </v-card-title>
              </div>
              <div class="btns">
                <v-btn
                  v-if="card.showOpenApp"
                  color="info"
                  @click.stop.prevent="alert = true"
                >
                  앱 열기
                </v-btn>
                <v-btn
                  v-else
                  color="bg-secondary"
                  disabled
                >
                  신청 대기중
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!--// 앱 목록 -->
    </section>
  </v-container>

  <!-- alert -->
  <v-dialog
    v-model="alert"
    class="popup-sm"
  >
    <v-card>
      <v-card-title>
        <span>사용중단</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="alert = false"
        />
      </v-card-title>

      <v-card-text>
        <!-- dialog contents -->
        <p class="alert-txt">
          입력하신 정보가 저장되지 않습니다.<br>정말 나가시겠습니까?
        </p>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
          @click="alert = false"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- alert -->
</template>

<script setup>
import { ref } from 'vue';
  const alert = ref(false);

  //slide
  const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
  ]

  //앱 전체 목록록
  const cardData = ref([
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
    },
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
      ],
      inUse: false,
    },
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
      ],
      inUse: true,
    },
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
    },
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
    },
    {
      link: "AppsDetail",
      imageSrc: "src/assets/images/app_module_img.png",
      title: "공통총무알리미",
      description: "농협 및 축협 이용 시 필수 예약 과정으로 편리한 예약 신청 및 관리를 도와주는 편리한 농협 앱",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
    }
  ]);

  //앱 좋아요 목록
  const cardRecommend = ref([
    {
      link: "AppsDetail",
      title: "공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
      showOpenApp: true,
      likeCount: 999,
    },
    {
      link: "AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
        { text: "HOT", color: "pink" }
      ],
      inUse: true,
      showOpenApp: false,
      likeCount: 0,
    },
    {
      link: "AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
      inUse: false,
      showOpenApp: false,
      likeCount: 555,
    },
    {
      link: "AppsDetail",
      title: "공통총무알리미",
      subtitle: "총무형",
      badges: [
        { text: "NEW", color: "success" },
        { text: "추천", color: "purple" },
      ],
      inUse: false,
      showOpenApp: false,
      likeCount: 888,
    }
  ]);
  const incrementLikes = (card) => {
    card.likeCount++; // 해당 카드의 likeCount 증가
  };
</script>