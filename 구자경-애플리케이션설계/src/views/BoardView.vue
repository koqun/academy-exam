<template>
    <div class="board">
        <p>{{$store.state.post[$route.params.i].title}}</p>
        <p>{{$store.state.post[$route.params.i].content}}</p>
    </div>
</template>