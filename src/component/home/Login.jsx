import React, { Component } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export class Login extends Component {
  render() {
    return (
      <div className=' p-10 bg-slate-400'>
         <Card className="max-w-sm">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="moonhassan9899@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
        
      </div>
    )
  }
}

export default Login