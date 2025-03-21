<template>
  <v-dialog
    :model-value="modelValue"
    class="popup-lg"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title>
        <span>콘텐츠 순서 설정</span>
        <v-btn
          icon="custom:close"
          density="comfortable"
          @click="emit('update:modelValue', false)"
        />
      </v-card-title>
      <v-card-text>
        <!-- dialog contents -->

        <v-data-table
          v-model:page="page"
          :headers="dataTableheaders"
          :items="dataTableItem"
          :items-per-page="itemsPerPage"
          :show-select="false"
          height="auto"
        >
          <template #top>
            <div class="table-top">
              <div class="control">
                <strong class="control-total">전체 ({{ dataTableItem.length }})</strong>
              </div>
              <div class="btns">
                <v-btn
                  size="large"
                  color="primary"
                >
                  저장
                </v-btn>
              </div>
            </div>
          </template>
          <template #item.move="{ item, index }">
            <v-icon
              icon="custom:sort-asc"
              size="24"
              :disabled="index === 0"
              @click="moveUp(index)"
            />
            <v-icon
              icon="custom:sort-desc"
              size="24"
              :disabled="index === dataTableItem.length - 1"
              @click="moveDown(index)"
            />
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

const dataTableheaders = [
  { title: "순서", key: "id", width: "80px" },
  { title: "콘텐츠명", key: "name", sortable: false },
  { title: "콘텐츠 유형", key: "type", sortable: false, width: "150px"},
  { title: "상태", key: "status", sortable: false, width: "110px"},
  { title: "노출 기간", key: "period", sortable: false , width: "250px"},
  { title: "노출 순서", key: "move", sortable: false , width: "110px"},
];

const dataTableItem = ref([
  { id: 1, name: "이미지 1", type: "앱 추천", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 2, name: "앱 추천1", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 3, name: "앱 추천2", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 4, name: "앱 추천3", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
  { id: 5, name: "앱 추천4", type: "이미지", status: "사용", period: "2015.01.15 ~ 2015.01.15" },
]);

const moveUp = (index) => {
  if (index > 0) {
    const temp = dataTableItem.value[index];
    dataTableItem.value.splice(index, 1);
    dataTableItem.value.splice(index - 1, 0, temp);
  }
};

const moveDown = (index) => {
  if (index < dataTableItem.value.length - 1) {
    const temp = dataTableItem.value[index];
    dataTableItem.value.splice(index, 1);
    dataTableItem.value.splice(index + 1, 0, temp);
  }
};

</script>

