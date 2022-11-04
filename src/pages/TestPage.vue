<script setup>
import Tab from "@/components/Tab";
import TabsWrapper from "@/components/TabsWrapper";

</script>

<template>
  <TabsWrapper>
    <Tab title="Title 1">Hello from Tab 1</Tab>
    <Tab title="Title 2">Hello from Tab 2</Tab>
    <Tab title="Title 3">Hello from Tab 3</Tab>
    <Tab title="Title 4">Hello from Tab 4</Tab>
  </TabsWrapper>
  <RouterLink to='/' class="self-center bg-green-700 text-green-100 rounded p-1.5">Home</RouterLink>
</template>