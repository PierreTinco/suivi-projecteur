import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CreateComponent } from "./create/create.component";

const routes: Route[] = [

    {
        path : 'login',
        component : LoginComponent
    },

    {
        path : 'create',
        component : CreateComponent
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AuthRoutingModule {}
