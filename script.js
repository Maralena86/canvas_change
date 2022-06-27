let canvas = document.querySelector('canvas');
		let context = canvas.getContext('2d');
		
		context.fillRect(100, 100, 400, 400);
		
		context.lineWidth = 5;
		context.lineWidth
		context.beginPath();
		context.rect(100, 100, 400, 400);
		//context.stroke();

		context.beginPath();
		
		context.arc(300, 300, 100, 0, Math.PI * 2);
		
		
		const width = 50;
		const height = 50;
		const gap = 30;
		let x, y;

		for (let i = 0; i < 5; i++) 
		{
			for (let j = 0; j < 5; j++) {
							
				x = 50 + (width + gap) *i;
				y = 50 + (width + gap) *j;			
			context.beginPath();
		
		
			context.rect(x,y, width, height);
			context.stroke();
			context.strokeStyle="white";
	
			
			if (Math.random() > 0.5) 
			{
				context.beginPath();
				context.rect(x + 9, y + 9, width -18, height -18)
				context.stroke();
				

			}
			}			
		}		