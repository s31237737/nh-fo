<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>자주 묻는 질문</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <div class="search-wrap">
          <v-form>
            <v-select
              v-model="select"
              label="유형"
              :items="['전체', '타입1', '타입2']"
            />

            <v-select
              v-model="select"
              label="공개 여부"
              :items="['전체', '상태1', '상태2']"
            />

            <Date
              v-model="date"
              label="기간"
            />

            <v-text-field
              v-model="form"
              class="search-inp"
              placeholder="글제목, 등록자를 검색해주세요."
              append-inner-icon="custom:search"
              @click:append-inner="onAppendClick"
            />

            <v-btn
              color="tertiary"
              variant="outlined"
              icon="custom:refresh"
            />
          </v-form>
        </div>
        <v-data-table
          v-model="checked"
          v-model:page="page"
          :headers="dataTableheaders"
          :items="dataTableItem"
          :items-per-page="itemsPerPage"
          @click:row="handleClick"
        >
          <template #top>
            <div class="table-top">
              <div class="control">
                <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
                <div class="control-input">
                  <v-select
                    v-model="itemsPerPage"
                    :items="pageSort"
                    item-title="title"
                    item-value="value"
                    density="compact"
                  />
                </div>
              </div>
            </div>
          </template>
          <template #no-data>
            <v-empty-state
              text="검색결과가 없습니다."
              icon="custom:warning"
              size="60"
            />
          </template>
          <template #bottom>
            <Pagination
              :total-items="dataTableItem.length"
              :items-per-page="itemsPerPage"
              @paging="page = $event.page"
            />
          </template>
        </v-data-table>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
          @click="emit('update:modelValue', false)"
        >
          목록
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          :disabled="!checked.length"
        >
          선택 완료
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

// 조회조건
const date = ref(new Date());
const form = ref("");
const select = ref("전체");
const onAppendClick = () => {
  alert("Append icon clicked!");
};
const handleClick = (event, row) => {
  console.log("Clicked item: ", row.item);
}
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(10);
const checked = ref([]);
const pageSort = ref([
  { title: "10개", value: 10 },
  { title: "20개", value: 20 },
  { title: "30개", value: 30 },
  { title: "50개", value: 50 },
  { title: "100개", value: 100 },
]);
const dataTableheaders = [
  { title: "순서", key: "id", sortable: true, width: "80px" },
  { title: "등록자", key: "registrant", sortable: false, width: "110px" },
  { title: "제목", key: "subject", sortable: false },
  { title: "유형", key: "type", sortable: false, width: "110px" },
  { title: "공개여부", key: "release", sortable: false, width: "110px" },
  { title: "등록일", key: "registrationDate", sortable: false, width: "110px" },
];

const dataTableItem = ref([
  {
    id: 1,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "업스토어",
    release: "공개",
    registrationDate: "2025.02.01",
  },
  {
    id: 2,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "공개",
    registrationDate: "2025.02.09",
  },
  {
    id: 3,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 4,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 5,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 6,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 3,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 7,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 8,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 9,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
  {
    id: 10,
    registrant: "등록자",
    subject:
      "자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. 자주 묻는 질문 제목입니다. ",
    type: "앱",
    release: "비공개",
    registrationDate: "2025.02.10",
  },
]);
</script>
