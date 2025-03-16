import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Input, Textarea } from '@nextui-org/input';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Slider } from '@nextui-org/slider';
import { Tooltip } from '@nextui-org/tooltip';
import { InfoIcon } from '@nextui-org/shared-icons';
import { useTranslation } from 'react-i18next';

export default function GetAdvice() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('translation');
  const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
   
    if (!isClient) {
      return null; 
    }

  const servicesList = [
    {
     label: t('get_advice.create_web'),
     value: 'web-app',
     description: '',
   },
   {
     label: t('get_advice.create_bot'),
     value: 'tg-mini-app',
     description: '',
   },
    {
      label: t('get_advice.create_sites'),
      value: 'web-sites',
      description: '',
    },
    {
      label: t('get_advice.create_mobile_apps'),
      value: 'mobile-app',
      description: '',
      },
    {
      label: t('get_advice.create_CRM'),  
      value: 'crm',
      description: '',
    },
 ];

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading((prevState) => !prevState);
    toast.success(
      t(`get_advice.success_message`),
    );
    console.log(e.target.values);
  };
  return (
    <div className="bg-primary/10 -mb-10 py-24">
      <Container>
        <Card className="max-w-xl mx-auto p-7">
          <form onSubmit={handleSubmitForm} className="flex flex-col gap-5">
            <Typography className="text-center mb-10" tag="h3">
            {t(`get_advice.advice_label`)}
            </Typography>

            <Input
              required={true}
              type="input"
              name="name"
              label={t(`get_advice.name`)}
              size="sm"
            />

            <Input
              required={true}
              type="email"
              name="email"
              label={t(`get_advice.email`)}
              size="sm"
            />

            <Input
              required={true}
              type="input"
              name="phone"
              label={t(`get_advice.phone`)}
              size="sm"
            />
            <Autocomplete
              required={true}
              name="service"
              size="md"
              label={t(`get_advice.advice_type`)}
            >
              {servicesList.map((service) => (
                <AutocompleteItem key={service.value} value={service.value}>
                  {service.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>

            <Slider
              label={t(`get_advice.advice_budget`)}
              step={50000}
              maxValue={1000000}
              minValue={0}
              defaultValue={[0, 500000]}
              showSteps={true}
              showTooltip={true}
              showOutline={true}
              disableThumbScale={true}
              formatOptions={{ style: 'currency', currency: 'KZT' }}
              renderLabel={({ children, ...props }) => (
                <label
                  {...props}
                  className="text-medium flex gap-2 items-center"
                >
                  {children}
                  <Tooltip
                    className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small cursor-help"
                    content={t(`get_advice.average`)}
                    placement="right"
                  >
                    <span className="transition-opacity opacity-80 hover:opacity-100">
                      <InfoIcon className="cursor-help" />
                    </span>
                  </Tooltip>
                </label>
              )}
              tooltipValueFormatOptions={{
                style: 'currency',
                currency: 'KZT',
                maximumFractionDigits: 0,
              }}
              classNames={{
                base: 'w-full',
                filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
                labelWrapper: 'mb-2',
                label: 'font-medium text-default-700 text-medium',
                value: 'font-medium text-default-500 text-small',
                thumb: [
                  'transition-size',
                  'bg-gradient-to-r from-secondary-400 to-primary-500',
                  'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
                  'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
                ],
                step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
              }}
              tooltipProps={{
                offset: 10,
                placement: 'bottom',
                classNames: {
                  base: [
                    'before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500',
                  ],
                  content: [
                    'py-2 shadow-xl',
                    'text-white bg-gradient-to-r from-secondary-400 to-primary-500',
                  ],
                },
              }}
            />
            <Textarea
              required={true}
              type="input"
              name="comment"
              label={t(`get_advice.comment`)}
              size="sm"
            />
            <Button
              isLoading={isLoading}
              className="mt-5"
              type="submit"
              color="primary"
            >
              {t(`get_advice.send_post`)}
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}
