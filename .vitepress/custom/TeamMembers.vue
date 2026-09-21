<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VPTeamMembers } from 'vitepress/theme'

const { lang } = useData()

const members = computed(() => {
    const title = lang.value.startsWith('zh') ? '开发者' : 'Developer'
    return [
        {
            avatar: '/team/blazesnow.png',
            name: 'BlazeSnow',
            title,
            links: [
                { icon: 'github', link: 'https://github.com/BlazeSnow' }
            ]
        },
        {
            avatar: '/team/wanfengbnm.jpg',
            name: 'wanfengbnm',
            title,
            links: [
                { icon: 'github', link: 'https://github.com/wanfengbnm' }
            ]
        }
    ]
})
</script>

<template>
    <VPTeamMembers size="small" :members="members" />
</template>
