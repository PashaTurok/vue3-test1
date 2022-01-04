<template>
  <v-card-actions>
    <v-tooltip left>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon size="25">mdi-home</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('hello') }}</span>
    </v-tooltip>
  </v-card-actions>
</template>

<i18n>
{
  "en": {
    "hello": "Hello, world!"
  },
  "ru": {
    "hello": "Привет, мир"
  }
}
</i18n>