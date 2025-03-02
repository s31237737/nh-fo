<template>
  <div class="w-75 ma-auto mt-5 mb-5">
    <div class="d-flex flex-wrap ga-3 bg-primary pa-2">
      <v-icon icon="custom:alarm" />
      <v-icon icon="custom:apply" />
      <v-icon icon="custom:arrow-first" />
      <v-icon icon="custom:arrow-left" />
      <v-icon icon="custom:arrow-up" />
      <v-icon icon="custom:board" />
      <v-icon icon="custom:channel" />
      <v-icon icon="custom:clock" />
      <v-icon icon="custom:display" />
      <v-icon icon="custom:info" />
      <v-icon icon="custom:monitoring" />
      <v-icon icon="custom:new-window" />
      <v-icon icon="custom:remove" />
      <v-icon icon="custom:setting" />
      <v-icon icon="custom:view" />
      <v-icon icon="custom:alert-success" />
      <v-icon icon="custom:alert" />
      <v-icon icon="custom:alert-error" />
      <v-icon icon="custom:arrow-down" />
      <v-icon icon="custom:arrow-last" />
      <v-icon icon="custom:arrow-right" />
      <v-icon icon="custom:authority" />
      <v-icon icon="custom:calendar" />
      <v-icon icon="custom:clear" />
      <v-icon icon="custom:close" />
      <v-icon icon="custom:edit" />
      <v-icon icon="custom:mobile" />
      <v-icon icon="custom:move" />
      <v-icon icon="custom:refresh" />
      <v-icon icon="custom:search" />
      <v-icon icon="custom:zoom" />
      <v-icon icon="custom:sort-desc" />
      <v-icon icon="custom:sort-asc" />
      <v-icon icon="custom:terms" />
      <v-icon icon="custom:warning" />
      <v-icon icon="custom:plus" />
      <v-icon icon="custom:minus" />
      <v-icon icon="custom:file" />
      <v-icon icon="custom:download" />
      <v-icon icon="custom:play" />
      <v-icon icon="custom:comment" />
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



const ex4 = ref(['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']);

</script>
