describe("Teste apidemos.apk", () => {
    afterEach(()=>{
        driver.reset();
    })
     it("Acessando as funções  App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAG", async () => {
         await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
         await $("id=io.appium.android.apis:id/two_buttons").click();
         const msgModal = await $('id=android:id/parentPanel').isDisplayed();
         expect(msgModal).toBe(true);
        
     });

      it('Acessando as funções App/Alert Dialogs/LIST DIALOG', async () => {
          await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
          await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
          await $("id=io.appium.android.apis:id/select_button").click();
          const msgPainel = await $('id=android:id/content').isDisplayed();;
          expect(msgPainel).toBe(true);
           });

      it('Acessando as funções App/Fragment/Hide and Show', async () => {
          await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
          await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
          await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
          const pag = await $('id=android:id/decor_content_parent').isDisplayed();
          expect(pag).toBe(true);
      });

      it('verificando a opção DISPLAY_HOME_AS_UP ', async () => {
         await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
         const asUp = await $('id=io.appium.android.apis:id/toggle_home_as_up').isDisplayed();
         expect(asUp).toBe(true);
      });
     
     it('verificando a opção DISPLAY_SHOW_TITLE', async () => {
         await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
         const Title = await $('id=io.appium.android.apis:id/toggle_show_title').isDisplayed();
         expect(Title).toBe(true);
      });
     
      it('verificando a opção DISPLAY_SHOW_CUSTOM', async () => {
         await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
         await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
         const CUSTOM = await $('id=io.appium.android.apis:id/toggle_show_custom').isDisplayed();
         expect(CUSTOM).toBe(true);
      });

     it('verificando a opção DISPLAY_SHOW_NAVIGATION', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const NAVIGATION = await $('id=io.appium.android.apis:id/toggle_navigation').isDisplayed();
        expect(NAVIGATION).toBe(true);
     });


});
