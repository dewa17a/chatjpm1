<template>
	<div class="ketik">
		<input type="text" name="" placeholder="Ketikkan Pesanmu..." v-model="pesanBaru" v-on:keyup.enter="kirimPesan()">
		<button type="button" class="btn btn-primary" @click="kirimPesan">Kirim</button>
	</div>
</template>
<script>
export default {

  name: 'ketik',

  data () {
    return {
    	pesanBaru : "asd"
    }
  },
   methods:{
    	kirimPesan(){
    		// console.log(this.pesanBaru);
    		this.$emit('pesankirim',{
    			message:this.pesanBaru,
    			user   :'Bambang'
    		});
    		this.pesanBaru="";
    	}
    }
}
</script>

<style lang="css" scoped>
	.ketik{
		display: flex;
		asd;
	}
	.ketik input{
		flex: 1 auto;
	}

	.ketik button{
		border-radius: 0;
	}
</style>