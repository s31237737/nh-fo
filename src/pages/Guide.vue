<template>
  <div class="w-75 ma-auto mt-5 mb-5">
    <!-- icons -->
    <div class="d-flex flex-wrap ga-2 bg-info">
      <div class="icon-item">
        <v-icon icon="custom:alarm" />
        <span>alarm</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:clock" />
        <span>clock</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:close" />
        <span>close</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:setting" />
        <span>setting</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-first" />
        <span>arrow-first</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-left" />
        <span>arrow-left</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-up" />
        <span>arrow-up</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-down" />
        <span>arrow-down</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-last" />
        <span>arrow-last</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:arrow-right" />
        <span>arrow-right</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:search" />
        <span>search</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:calendar" />
        <span>calendar</span>
      </div>
    </div>
    <div class="d-flex flex-wrap ga-2 mt-5">
      <div class="icon-item">
        <v-icon icon="custom:info" />
        <span>info</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:new-window" />
        <span>new-window</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:remove" />
        <span>remove</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:view" />
        <span>view</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert-success" />
        <span>alert-success</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert" />
        <span>alert</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:alert-error" />
        <span>alert-error</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:clear" />
        <span>clear</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:edit" />
        <span>edit</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:move" />
        <span>move</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:refresh" />
        <span>refresh</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:zoom" />
        <span>zoom</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:sort-desc" />
        <span>sort-desc</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:sort-asc" />
        <span>sort-asc</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:warning" />
        <span>warning</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:plus" />
        <span>plus</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:minus" />
        <span>minus</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:file" />
        <span>file</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:download" />
        <span>download</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:play" />
        <span>play</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:comment" />
        <span>comment</span>
      </div>
    </div>
    <div class="d-flex ga-2 mt-4">
      <v-icon
        icon="$vuetify"
        size="x-large"
      />
      <v-icon
        icon="$vuetify"
        size="large"
      />
      <v-icon icon="$vuetify" />
      <v-icon
        icon="$vuetify"
        size="small"
      />
      <v-icon
        icon="$vuetify"
        size="x-small"
      />
    </div>

    <v-divider class="mt-4 pt-4" />
    <Popup />

    <!-- flag -->
    <v-divider class="mt-4 pt-4" />
    <div>
      <v-row
        align="center"
      >
        <v-col cols="auto">
          <v-label>색상, 모양</v-label>
        </v-col>
        <v-col cols="auto">
          <v-chip class="flag">
            default
          </v-chip>

          <v-chip class="flag blue">
            blue
          </v-chip>

          <v-chip class="flag purple">
            purple
          </v-chip>

          <v-chip class="flag pink">
            pink
          </v-chip>

          <v-chip class="flag black">
            black/#1e1e1e
          </v-chip>

          <v-chip
            class="flag"
            variant="outlined"
          >
            outlined
          </v-chip>
          <v-chip
            class="flag black"
            label
          >
            앱 열기
          </v-chip>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="auto">
          <v-label>크기</v-label>
        </v-col>
        <v-col cols="auto">
          <v-chip
            class="flag"
            size="small"
          >
            small/20px
          </v-chip>
          <v-chip class="flag">
            default/28px
          </v-chip>
          <v-chip
            class="flag"
            size="large"
          >
            large/40px
          </v-chip>
        </v-col>
      </v-row>
    </div>
    <v-divider class="mt-4 pt-4" />
    <div class="d-flex justify-center ga-2">
      <v-chip>
        Default
      </v-chip>

      <v-chip color="primary">
        Primary
      </v-chip>

      <v-chip color="secondary">
        Secondary
      </v-chip>


      <v-chip color="purple">
        purple
      </v-chip>
      <v-chip color="pink">
        pink
      </v-chip>

      <v-chip color="green">
        Green
      </v-chip>
    </div>
    <div class="d-flex justify-center ga-2 mt-2">
      <v-chip variant="flat">
        Default flat
      </v-chip>

      <v-chip
        color="primary"
        variant="flat"
      >
        Primary flat
      </v-chip>

      <v-chip
        color="secondary"
        variant="flat"
      >
        Secondary flat
      </v-chip>

      <v-chip
        color="red"
        variant="flat"
      >
        Red flat
      </v-chip>

      <v-chip
        color="green"
        variant="flat"
      >
        Green flat
      </v-chip>
    </div>
    <!-- radio -->
    <v-radio-group>
      <v-radio
        label="Radio One"
        value="one"
      />
      <v-radio
        label="Radio Two"
        value="two"
      />
      <v-radio
        label="Radio Three"
        value="three"
      />
    </v-radio-group>
    <div class="mt-4 d-flex">
      <v-list
        density="comfortable"
        :items="items"
      />
    </div>

    <!-- 텍스트 -->
    <v-row>
      <v-col>
        <p class="title-1">
          title-1 큰 제목입니다 (42px, 400, 58)
        </p>
        <p class="title-2">
          title-2 중간 크기 제목입니다 (34px, 400, 50)
        </p>
        <p class="title-2-bd">
          title-2-bd 중간 크기 제목입니다 (34px, 600, 50)
        </p>
        <p class="title-3">
          title-3 중간 크기 제목입니다 (32px, 500, 40)
        </p>
        <p class="title-3-bd">
          title-3-bd 중간 크기 제목입니다 (32px, 700, 40)
        </p>
        <p class="title-4">
          title-4 중간 크기 제목입니다 (26px, 500, 34)
        </p>
        <p class="title-5">
          title-5 작은 크기 제목입니다 (24px, 500, 32)
        </p>
        <p class="title-5-bd">
          title-5 작은 크기 제목입니다 (24px, 500, 32)
        </p>
        <p class="title-6">
          title-6 작은 크기 제목입니다 (18px, 500, 26)
        </p>
        <p class="title-6-bd">
          title-6-bd 작은 크기 제목입니다 (18px, 700, 26)
        </p>
        <v-divider class="mt-4 pt-4" />
        <p class="text-1">
          text-1 큰 본문 텍스트입니다. (20px, 500, 28)
        </p>
        <p class="text-2">
          text-2 큰 본문 텍스트입니다. (18px, 400, 26)
        </p>
        <p class="text-3">
          text-3 일반 본문 텍스트입니다. (16px, 400, 24)
        </p>
        <p class="text-3-md">
          text-3-md 일반 본문 텍스트입니다. (16px, 500, 24)
        </p>
        <p class="text-3-bd">
          text-3-md 일반 본문 텍스트입니다. (16px, 700, 24)
        </p>
        <p class="text-4">
          text-4 작은 본문 텍스트입니다. (14px, 400, 20)
        </p>
        <p class="text-4-md">
          text-4-md 작은 본문 텍스트입니다. (14px, 500, 20)
        </p>
        <v-divider class="mt-4 pt-4" />
        <p class="caption-1">
          caption-1 캡션 스타일입니다. (18px, 700, 26)
        </p>
        <p class="caption-2">
          caption-2 캡션 스타일입니다. (14px, 400, 20)
        </p>
        <p class="caption-2-md">
          caption-2-md 캡션 스타일입니다. (14px, 500, 20)
        </p>
        <p class="caption-3">
          caption-3 캡션 스타일입니다. (12px, 400, 20)
        </p>
        <p class="caption-3-md">
          caption-3-md 캡션 스타일입니다. (12px, 600, 20)
        </p>
      </v-col>
    </v-row>
    <!-- // 텍스트 -->

    <!-- 버튼 -->
    <div>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="auto">
          <v-btn density="compact">
            24px /  Compact Button
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="comfortable">
            28px / Comfortable Button
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">
            36px / Default Button
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- x-small/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            size="x-small"
          >
            20px/x-small/Primary
          </v-btn>
        </v-col>

        <!-- x-small/Secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            size="x-small"
          >
            x-small/Secondary
          </v-btn>
        </v-col>

        <!-- x-small/Tertiary -->
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            size="x-small"
            variant="outlined"
          >
            x-small/Tertiary
          </v-btn>
        </v-col>

        <!-- x-small/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="x-small"
          >
            x-small/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="x-small"
            variant="outlined"
          >
            x-small/Warning
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- small/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            size="small"
          >
            28px/small/Primary
          </v-btn>
        </v-col>

        <!-- small/Secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            size="small"
          >
            small/Secondary
          </v-btn>
        </v-col>

        <!-- small/Tertiary -->
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            size="small"
            variant="outlined"
          >
            small/Tertiary
          </v-btn>
        </v-col>

        <!-- small/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="small"
          >
            small/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="warning"
            size="small"
            variant="outlined"
          >
            small/Warning
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- default/Primary -->
        <v-col cols="auto">
          <v-btn color="primary">
            36px/default/Primary
          </v-btn>
        </v-col>

        <!-- default/Secondary -->
        <v-col cols="auto">
          <v-btn color="secondary">
            default/Secondary
          </v-btn>
        </v-col>

        <!-- default/Tertiary -->
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            variant="outlined"
          >
            default/Tertiary
          </v-btn>
        </v-col>

        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn color="warning">
            default/Warning
          </v-btn>
        </v-col>
        <!-- default/Warning -->
        <v-col cols="auto">
          <v-btn
            color="warning"
            variant="outlined"
          >
            default/Warning
          </v-btn>
        </v-col>
      </v-row>


      <v-row>
        <!-- large/Primary -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="primary"
          >
            42px/large/Primary
          </v-btn>
        </v-col>

        <!-- large/Secondary -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="secondary"
          >
            large/Secondary
          </v-btn>
        </v-col>

        <!-- large/Tertiary -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="tertiary"
            variant="outlined"
          >
            large/Tertiary
          </v-btn>
        </v-col>

        <!-- large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="warning"
          >
            large/Warning
          </v-btn>
        </v-col>

        <!-- large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="large"
            color="warning"
            variant="outlined"
          >
            large/Warning
          </v-btn>
        </v-col>
      </v-row>


      <v-row>
        <!-- x-large/Primary -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="primary"
          >
            54px/x-large/Primary
          </v-btn>
        </v-col>

        <!-- x-large/Secondary -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="secondary"
          >
            x-large/Secondary
          </v-btn>
        </v-col>

        <!-- x-large/Tertiary -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="tertiary"
            variant="outlined"
          >
            x-large/Tertiary
          </v-btn>
        </v-col>

        <!-- x-large/Warning -->
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="warning"
          >
            x-large/Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            size="x-large"
            color="warning"
            variant="outlined"
          >
            x-large/Warning
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <!-- icon/ 40px -->
        <v-col cols="auto">
          <v-btn
            variant="text"
            icon="custom:refresh"
          />
        </v-col>
        <!-- icon/ 40px -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            icon="custom:refresh"
          />
        </v-col>

        <!-- icon/ 32px -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            icon="custom:plus"
            density="comfortable"
          />
        </v-col>

        <!-- icon/24px -->
        <v-col cols="auto">
          <v-btn
            density="compact"
            icon="custom:refresh"
          />
        </v-col>
      </v-row>
    </div>
    <!-- //버튼 -->

    <!-- table -->
    <v-row>
      <v-col cols="auto">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
]);
 const items = [
  { type: 'subheader', title: 'Group #1' },
  {
    title: 'Item #1',
    value: 1,
  },
  {
    title: 'Item #2',
    value: 2,
  },
  {
    title: 'Item #3',
    value: 3,
  },
]
</script>
<style scoped>
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.icon-item span {
  margin-top: 5px;
  font-size: 12px;
}
</style>
