jQuery(function($) {
    $('html').terminal({
        help: function() {
            this.echo("info         Show information about the Game");
            this.echo("start     	Start to play");
            this.echo("helphelp   If you cannot solve the game, you can find more help");
        	this.echo("merci		You can thank the author as you wish\n");
		},
        info: function() {
            this.echo("Time: Fri 2014-03-07 10AM~10PM +0800");
            this.echo("Place: Unknown");
            this.echo("Theme: DA22 girls will enjoy the girls day!");
            this.echo("Now you can: Enjoy the game\n");
        },
		
		helphelp: function() {
			this.echo("You can call 15652799536 or write to [[u;;]xf1280@gmail.com] for more help!\n");
		},
		start: function(){
			this.echo("Among the five pages, only one is different from others");
			this.echo("And the answer is just in the picture\n");
			this.echo("[[u;;]http://eureka.u.qiniudn.com/txd.html]");
			this.echo("[[u;;]http://eureka.u.qiniudn.com/hanzi.html]");
			this.echo("[[u;;]http://eureka.u.qiniudn.com/wwq.html]");
			this.echo("[[u;;]http://eureka.u.qiniudn.com/nanye.html]");
			this.echo("[[u;;]http://eureka.u.qiniudn.com/xiaowen.html]");
		},
		source: function(){
			this.echo("Congratulations! Bravo! You found the answer");
			this.echo("And the answer is just in the source code of the page");
			this.echo("You can view the source code of the page via the browser\n");
		
		},
        register: function() {
            var term = this,
                register_info = {};
            term
                .push(function(command){
                    if(command.match(/Y|y|yes|Yes/i)){
                        term.echo('Sending your register info...');
                        $.ajax({
                            type:'POST',
                            headers:{'x-csrf-token':$('meta[name="csrf"]').attr('content')},
                            data:register_info,
                            success:function(res){
                                term.echo('Successfully registered!\n');
                            },
                            error:function(res){
                                term.echo('There are some errors. Please contact mulab.thu@gmail.com\n');
                            }
                        });
                        term.echo('We will contact you later :D\n');
                        term.pop();
                    }else if (command.match(/N|n|no|No/i)){
                        term.echo('cancelled.');
                        term.echo("");
                        term.pop();
                    }
                },{
                    prompt:'Is your register info correct?(y/n)'
                })
                .push(function(command){
                    register_info["Github"] = command;
                    term.pop();
                },{
                    prompt: 'Your Github Id: '
                })
                .push(function(command) {
                    register_info["Email"] = command;
                    term.pop();
                }, {
                    prompt: 'Your Email: '
                })
                .push(function(command) {
                    register_info["Phone"] = command
                    term.pop();
                }, {
                    prompt: 'Your Phone Number: '
                })
                .push(function(command) {
                    register_info["Name"] = command;
                    term.pop();
                }, {
                    prompt: 'Your Name: '
                });
        },
        eureland: function() {
            this.echo("Share the link [[u;;]http://eureland.tk] as you wish!\n");
        },
		merci: function() {
			this.echo("You are welcome!");
		}
		
		
		
    }, {
        greetings: function() {
			  return "\n" +
                "What can we do to [[u;;]help] you?\n";
        }
    });
});
