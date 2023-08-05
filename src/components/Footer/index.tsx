import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '开普勒星球',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '狗头乐园',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '芝士都是力量',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: <GithubOutlined />,
          href: 'https://gitee.com/Goutouxiaoen',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
