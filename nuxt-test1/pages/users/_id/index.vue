<template>
    <p>Single user with id: {{ $route.params.id }}</p>
</template>
<script>
export default {
    validate(data){
        //return data.params.id == 1;
        return /^\d+$/.test(data.params.id);
    }
}
</script>