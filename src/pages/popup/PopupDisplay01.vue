<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-md"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>앱 검색</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->
        <v-text-field
          v-model="search"
          class="search-inp mb-5"
          placeholder="앱 이름, 앱 코드로 검색해주세요."
          append-inner-icon="custom:search"
        />
        <v-data-table
          v-model:page="page"
          :headers="dataTableheaders"
          :items="dataTableItem"
          :items-per-page="itemsPerPage"
          :search="search"
          :show-select="false"
        >
          <template #top>
            <div class="table-top">
              <div class="control">
                <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
              </div>
            </div>
          </template>
          <template #item.radioBtn="{ item }">
            <v-radio-group
              v-model="selectedItem"
            >
              <v-radio
                :value="item.id"
                hide-details
              />
            </v-radio-group>
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
          @click="emit('update:modelValue', false)"
        >
          취소
        </v-btn>
        <v-btn
          color="primary"
          size="large"
        >
          선택완료
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

// 조회조건
const search = ref("");

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
const selectedItem = ref([]);

const dataTableheaders = [
  { title: "", key: "radioBtn", sortable: false, width: "80px"},
  { title: "앱 이름", key: "appName", sortable: false },
  { title: "앱 코드", key: "appCode", sortable: false, width: "150px" },
];

const dataTableItem = ref([
  {
    id: 1,
    appCode: "APP001",
    appName: "앱 이름 노출합니다.",
    appType: "모바일",
    status: "수동",
    registrant: "999",
  },
  {
    id: 2,
    appCode: "APP002",
    appName:
      "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
    appType: "웹",
    status: "자동",
    registrant: "999",
  },
  {
    id: 3,
    appCode: "APP003",
    appName: "앱3",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
  {
    id: 4,
    appCode: "APP004",
    appName: "앱4",
    appType: "대여",
    status: "자동",
    registrant: "999",
  },
  {
    id: 5,
    appCode: "APP005",
    appName: "앱5",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
  {
    id: 6,
    appCode: "APP006",
    appName: "앱6",
    appType: "대여",
    status: "자동",
    registrant: "999",
  },
  {
    id: 7,
    appCode: "APP007",
    appName: "앱7",
    appType: "대여",
    status: "수동",
    registrant: "999",
  },
]);
</script>

