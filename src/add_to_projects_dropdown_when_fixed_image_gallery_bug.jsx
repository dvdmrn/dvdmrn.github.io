<div onClick={ e=>this.setState({targetWindow:"photos",lastWindow:"photos"}) }>
                  <W69.OpenGallery 
                    id="photos"
                    text="⤷ photos"
                    content={<PhotoGallery/>}
                    title="photos"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div>

              <div onClick={ e=>this.setState({targetWindow:"comics",lastWindow:"comics"}) }>
                  <W69.OpenWindow 
                    id="illustration"
                    text={window.screen.width/window.screen.height < 1 ? "⤷ illustration" : "⤷ illustr."}
                    content={<Content.PooWindow/>}
                    title="illustration"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div>