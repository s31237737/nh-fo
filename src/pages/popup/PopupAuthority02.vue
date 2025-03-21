<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>직원 검색</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->

        <v-data-table
          v-model="checked"
          v-model:page="page"
          :headers="dataTableheaders"
          :items="dataTableItem"
          :items-per-page="itemsPerPage"
        >
          <template #top>
            <div class="table-top">
              <div class="control">
                <p class="title-2">
                  선택된 직원({{ checked.length }})을 추가하시겠습니까?
                </p>
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
          <!-- <template #bottom>
           <Pagination
              :total-items="dataTableItem.length"
              :items-per-page="itemsPerPage"
              @paging="page = $event.page"
            />
          </template>-->
        </v-data-table>
        <!-- // dialog contents -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="secondary"
          size="large"
        >
          이전
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          :disabled="!checked.length"
        >
          선택완료
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

// 데이터 테이블
const page = ref(1);
const itemsPerPage = ref(1000);
const checked = ref(Array.from({ length: 20 }, (_, i) => i + 1));

const dataTableheaders = [
  { title: "직원명(직급명)", key: "name", sortable: false,width: "34%" },
  { title: "사무소명", key: "office", sortable: false, width: "33%" },
  { title: "개인번호", key: "num", sortable: false, width: "33%" },
];

const dataTableItem = ref([
  {
    id: 1,
    name: "김철수",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.10",
  },
  {
    id: 2,
    name: "이영희",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.15",
  },
  {
    id: 3,
    name: "박민수",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.01",
  },
  {
    id: 4,
    name: "최지훈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.10",
  },
  {
    id: 5,
    name: "정지혜",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.20",
  },
  {
    id: 6,
    name: "이수진",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.05",
  },
  {
    id: 7,
    name: "김동희",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.12",
  },
  {
    id: 8,
    name: "임성민",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.02",
  },
  {
    id: 9,
    name: "황정우",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.18",
  },
  {
    id: 10,
    name: "오민석",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.25",
  },
  {
    id: 11,
    name: "윤지혜",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.07",
  },
  {
    id: 12,
    name: "고정호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.30",
  },
  {
    id: 13,
    name: "전지영",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.08",
  },
  {
    id: 14,
    name: "한서진",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.28",
  },
  {
    id: 15,
    name: "곽지호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.01",
  },
  {
    id: 16,
    name: "임지훈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.22",
  },
  {
    id: 17,
    name: "김수빈",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.03",
  },
  {
    id: 18,
    name: "박지성",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.02.09",
  },
  {
    id: 19,
    name: "오준호",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.17",
  },
  {
    id: 20,
    name: "정한나",
    office: "사무소명",
    num: "123456789",
    createdDate: "2025.01.14",
  },
]);
</script>
