import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const CustomerSettingsPage = () => {
    return (
        <div className="flex-1 min-w-0">
            <header className="flex items-center gap-3 p-4 sm:p-6">
                <button id="open" className="lg:hidden text-2xl" aria-label="Open menu">☰</button>
                <h1 className="text-2xl font-bold">Customer Dashboard</h1>
                <div className="ml-auto w-10 h-10 rounded-full bg-brand text-white grid place-items-center font-bold">V</div>
            </header>
            <main className="px-4 sm:px-6 pb-10">
                <section className="mt-6 bg-white rounded-2xl p-5 shadow-sm max-w-3xl">
                    <div className="w-full max-w-md">
                        <form>
                            <FieldGroup>
                                <FieldSet>
                                  <FieldLegend>Edit Profile</FieldLegend>
                                  <br />
                                  <FieldGroup>
                                    <Field>
                                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                        Name
                                      </FieldLabel>
                                      <Input id="customer-name" value="" placeholder="Update Your Full Name..." required />
                                    </Field>
                                  </FieldGroup>
                                  <FieldGroup>
                                    <Field>
                                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                        Email
                                      </FieldLabel>
                                      <Input id="customer-email" value="" placeholder="Update Your Email..." required />
                                    </Field>
                                  </FieldGroup>
                                  <FieldGroup>
                                    <Field>
                                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                        Old Password
                                      </FieldLabel>
                                      <Input id="customer-old-password" value="" placeholder="Enter Your Old Password" required />
                                    </Field>
                                  </FieldGroup>
                                  <FieldGroup>
                                    <Field>
                                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                        New Password
                                      </FieldLabel>
                                      <Input id="customer-new-password" value="" placeholder="Enter Your New Password" required />
                                    </Field>
                                  </FieldGroup>
                                </FieldSet>
                                {/* <FieldSeparator /> */}

                                <Field orientation="horizontal">
                                  <Button type="submit">Submit</Button>
                                  <Button variant="outline" type="button">
                                    Cancel
                                  </Button>
                                </Field>
                            </FieldGroup>                            
                        </form>
                    </div>
                </section>
            </main>
        </div>            
    );
};

export default CustomerSettingsPage;