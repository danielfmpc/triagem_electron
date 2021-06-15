<script>
  import Card from '@smui/card';
	import {triagem}  from './store.js';
	import { io } from "socket.io-client";
	const socket = io('http://192.168.0.246:3000', { transports: ["websocket"] });
	// let triagem_value;	

	socket.on('greeting', (data) => {
		$triagem = data['triagem']
	})
	
</script>

<main>
	<div class="card-display">
		<div class="card-container-primary">
			<Card class="card-primary">TRIAGEM LIVRE</Card>
		</div>
		<div class="card-container-secondary">
			<Card class="card-secondary">{$triagem}</Card>
		</div>
	</div>
</main>