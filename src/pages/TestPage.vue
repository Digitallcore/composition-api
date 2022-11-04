<script setup>
import Tab from "@/components/Tab";
import TabsWrapper from "@/components/TabsWrapper";
</script>

<template>
  <TabsWrapper>
    <Tab title="Title 1">Description 1</Tab>
    <Tab title="Title 2">Description 2</Tab>
    <Tab title="Title 3">Description 3</Tab>
    <Tab title="Title 4">Description 4</Tab>
    <Tab title="Title 5">Description 5</Tab>

  </TabsWrapper>
  <RouterLink to='/' class="self-center bg-green-700 text-green-100 rounded p-1.5">Home</RouterLink>
</template>
