import { NgModule } from '@angular/core';

import { OnhouseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OnhouseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OnhouseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OnhouseSharedCommonModule {}
