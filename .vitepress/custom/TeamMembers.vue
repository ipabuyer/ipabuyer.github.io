<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: '/team/blazesnow.png',
        name: 'BlazeSnow',
        title: '开发者',
        links: [
            { icon: 'github', link: 'https://github.com/BlazeSnow' }
        ]
    },
    {
        avatar: '/team/wanfengbnm.jpg',
        name: 'wanfengbnm',
        title: '开发者',
        links: [
            { icon: 'github', link: 'https://github.com/wanfengbnm' }
        ]
    }
]
</script>

<template>
    <VPTeamMembers size="small" :members="members" />
</template>