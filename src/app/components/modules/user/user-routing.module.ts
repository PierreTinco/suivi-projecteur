import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";


const routes: Route[] = [

    {
        path : '',
        component : UserComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class UserRoutingModule {}
