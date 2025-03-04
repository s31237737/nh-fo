<template>
  <div class="w-75 ma-auto mt-5 mb-5">
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
    </div>


    <div class="d-flex flex-wrap ga-2 mt-5">
      <div class="icon-item">
        <v-icon icon="custom:apply" />
        <span>apply</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:board" />
        <span>board</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:channel" />
        <span>channel</span>
      </div>

      <div class="icon-item">
        <v-icon icon="custom:display" />
        <span>display</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:info" />
        <span>info</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:monitoring" />
        <span>monitoring</span>
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
        <v-icon icon="custom:authority" />
        <span>authority</span>
      </div>
      <div class="icon-item">
        <v-icon icon="custom:calendar" />
        <span>calendar</span>
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
        <v-icon icon="custom:mobile" />
        <span>mobile</span>
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
        <v-icon icon="custom:terms" />
        <span>terms</span>
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


    <v-divider class="mt-4 pt-4" />
    <Popup />

    <div class="d-flex ga-2 mt-4">
      <v-chip>
        Default
      </v-chip>

      <v-chip color="primary">
        Primary
      </v-chip>

      <v-chip color="warning">
        warning
      </v-chip>

      <v-chip color="gray">
        gray
      </v-chip>

      <v-chip color="state_warn">
        state_warn
      </v-chip>
    </div>
    <div class="d-flex ga-2 mt-2">
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
    <div class="d-flex ga-2">
      <v-label style="width: 100px">
        default
      </v-label>

      <v-chip size="x-small">
        x-small
      </v-chip>

      <v-chip size="small">
        small
      </v-chip>

      <v-chip>
        default
      </v-chip>

      <v-chip size="large">
        large
      </v-chip>

      <v-chip size="x-large">
        x-large
      </v-chip>
    </div>
    <div class="d-flex  align-center ga-2 mt-2">
      <v-label style="width: 100px">
        comfortable
      </v-label>

      <v-chip
        density="comfortable"
        size="x-small"
      >
        x-small
      </v-chip>

      <v-chip
        density="comfortable"
        size="small"
      >
        small
      </v-chip>

      <v-chip density="comfortable">
        default
      </v-chip>

      <v-chip
        density="comfortable"
        size="large"
      >
        large
      </v-chip>

      <v-chip
        density="comfortable"
        size="x-large"
      >
        x-large
      </v-chip>
    </div>
    <div class="d-flex align-center ga-2 mt-2">
      <v-label style="width: 100px">
        compact
      </v-label>

      <v-chip
        density="compact"
        size="x-small"
      >
        x-small
      </v-chip>

      <v-chip
        density="compact"
        size="small"
      >
        small
      </v-chip>

      <v-chip density="compact">
        default
      </v-chip>

      <v-chip
        density="compact"
        size="large"
      >
        large
      </v-chip>

      <v-chip
        density="compact"
        size="x-large"
      >
        x-large
      </v-chip>
    </div>

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

    <!-- 텍스트 -->
    <v-row>
      <v-col>
        <p class="title-1">
          title-1 큰 제목입니다 (24px, Bold, 125%)
        </p>
        <p class="title-2">
          title-2 중간 크기 제목입니다 (18px, SemiBold, 125%)
        </p>

        <p class="text-1">
          text-1 큰 본문 텍스트입니다. (16px, Regular, 150%)
        </p>
        <p class="text-1-md">
          text-1-md 큰 본문 텍스트입니다. (16px, SemiBold, 150%)
        </p>
        <p class="text-1-bd">
          text-1-bd 큰 본문 Bold 700 텍스트입니다. (16px, Bold, 150%)
        </p>

        <p class="text-2">
          text-2 일반 본문 텍스트입니다. (14px, Regular, 150%)
        </p>
        <p class="text-2-md">
          text-2-md 일반 본문  텍스트입니다. (14px, SemiBold, 150%)
        </p>

        <p class="caption">
          caption 작은 캡션 스타일입니다. (14px, Regular, 150%)
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
            48px/large/Primary
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
            56px/x-large/Primary
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
        <!-- icon/Primary -->
        <v-col cols="auto">
          <v-btn
            size="small"
            color="primary"
            prepend-icon="custom:plus"
          >
            icon/Primary
          </v-btn>
        </v-col>

        <!-- icon/Secondary -->
        <v-col cols="auto">
          <v-btn
            size="small"
            color="secondary"
            prepend-icon="custom:plus"
          >
            icon/Secondary
          </v-btn>
        </v-col>

        <!-- icon/Tertiary -->
        <v-col cols="auto">
          <v-btn
            size="small"
            color="tertiary"
            variant="outlined"
            append-icon="custom:plus"
          >
            icon/Tertiary
          </v-btn>
        </v-col>

        <!-- icon/Warning -->
        <v-col cols="auto">
          <v-btn
            size="small"
            color="warning"
            append-icon="custom:plus"
          >
            icon/Warning
          </v-btn>
        </v-col>
        <!-- icon/Warning -->
        <v-col cols="auto">
          <v-btn
            size="small"
            color="warning"
            variant="outlined"
            append-icon="custom:plus"
          >
            icon/Warning
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <!-- icon/Primary -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            icon="custom:refresh"
          />
        </v-col>

        <!-- icon/Secondary -->
        <v-col cols="auto">
          <v-btn
            color="secondary"
            icon="custom:plus"
            density="comfortable"
          />
        </v-col>

        <!-- icon/Tertiary -->
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            density="compact"
            variant="outlined"
            icon="custom:refresh"
          />
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            class="icon-lg"
            variant="outlined"
            icon="custom:refresh"
          />
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            class="icon-md"
            variant="outlined"
            icon="custom:refresh"
          />
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="tertiary"
            class="icon-sm"
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
