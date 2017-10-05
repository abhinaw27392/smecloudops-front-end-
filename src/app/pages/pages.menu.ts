export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            //icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'inventory',
        data: {
          menu: {
            title: 'Inventory',
            //icon: 'ion-ios-list-outline',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ec2',
            data: {
              menu: {
                title: 'EC2',
              }
            }
          },
          {
            path: 'rds',
            data: {
              menu: {
                title: 'RDS',
              }
            }
          },
          {
            path: 's3',
            data: {
              menu: {
                title: 'S3',
              }
            }
          },
          {
            path: 'iamuser',
            data: {
              menu: {
                title: 'I AM USER',
              }
            }
          },
          {
            path: 'iamgroup',
            data: {
              menu: {
                title: 'I AM GROUP',
              }
            }
          },
          {
            path: 'routetable',
            data: {
              menu: {
                title: 'ROUTE TABLE',
              }
            }
          },
          {
            path: 'elb',
            data: {
              menu: {
                title: 'ELB',
              }
            }
          },
          {
            path: 'ebs',
            data: {
              menu: {
                title: 'EBS',
              }
            }
          },
          {
            path: 'snapshot',
            data: {
              menu: {
                title: 'SNAPSHOT',
              }
            }
          },
          {
            path: 'ami',
            data: {
              menu: {
                title: 'AMI',
              }
            }
          },
          {
            path: 'vpc',
            data: {
              menu: {
                title: 'VPC',
              }
            }
          },
          {
            path: 'securitygroup',
            data: {
              menu: {
                title: 'SECURITY GROUP',
              }
            }
          },
          {
            path: 'subnet',
            data: {
              menu: {
                title: 'SUBNET',
              }
            }
          },
          {
            path: 'vpnconnection',
            data: {
              menu: {
                title: 'VPN CONNECTION',
              }
            }
          },
          {
            path: 'vpcpeering',
            data: {
              menu: {
                title: 'VPC PEERING',
              }
            }
          },
          {
            path: 'redshift',
            data: {
              menu: {
                title: 'REDSHIFT',
              }
            }
          }

        ]
      },
      {
        path: 'cisaudits',
        data: {
          menu: {
            title: 'CIS Audits',
            //icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'costsaving',
        data: {
          menu: {
            title: 'Costsaving',
            //icon: 'ion-card',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'unusedebs',
            data: {
              menu: {
                title: 'UNUSED EBS',
              }
            }
          },
          {
            path: 'unusedelasticips',
            data: {
              menu: {
                title: 'UNUSED ELASTIC-IPS',
              }
            }
          },
          {
            path: 'unusedsnapshot',
            data: {
              menu: {
                title: 'UNUSED SNAPSHOT',
              }
            }
          },
          {
            path: 'unusedelb',
            data: {
              menu: {
                title: 'UNUSED ELB',
              }
            }
          },
          {
            path: 'unusedec2',
            data: {
              menu: {
                title: 'UNUSED EC2',
              }
            }
          },
          {
            path: 'unusedsecurity',
            data: {
              menu: {
                title: 'UNUSED SECURITY GROUP',
              }
            }
          },
          {
            path: 'totalcost',
            data: {
              menu: {
                title: 'TOTAL COST REQUEST',
              }
            }
          },
        ]
      },
      {
        path: 'disasterrecovery',
        data: {
          menu: {
            title: 'Disaster Recovery',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'backupscript',
            data: {
              menu: {
                title: 'Backup Script'
              }
            }
          },
          {
            path: 'snapmissing',
            data: {
              menu: {
                title: 'Missing Snapshot'
              }
            }
          },
          {
            path: 'rdsbackup',
            data: {
              menu: {
                title: 'Rds Backup'
              }
            }
          },
          {
            path: 'rdsmultiaz',
            data: {
              menu: {
                title: 'Rds Multi AZ\'s'
              }
            }
          }
        ]
      },
      {
        path: 'assetmanagement',
        data: {
          menu: {
            title: 'Asset Management',
            //icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'amiaudit',
            data: {
              menu: {
                title: 'AMI AUDIT',
              }
            }
          },
          {
            path: 'amiaging',
            data: {
              menu: {
                title: 'AMI AGING',
              }
            }
          },
          {
            path: 'amidetails',
            data: {
              menu: {
                title: 'AMI DETAILS',
              }
            }
          },
          {
            path: 'amicleanup',
            data: {
              menu: {
                title: 'AMI CLEANUP',
              }
            }
          }
          ,
          {
            path: 'oldebsperformance',
            data: {
              menu: {
                title: 'OLD EBS PERFORMANCE',
              }
            }
          },
          {
            path: 'ec2withoutri',
            data: {
              menu: {
                title: 'EC2 WITHOUT RI',
              }
            }
          },
          {
            path: 'tagsprojectcode',
            data: {
              menu: {
                title: 'TAGS-PROJECTCODE',
              }
            }
          },
          {
            path: 'tagsowner',
            data: {
              menu: {
                title: 'TAGS-OWNER',
              }
            }
          },
          {
            path: 'tagsbusinessunit',
            data: {
              menu: {
                title: 'TAGS-BUSINESS UNIT',
              }
            }
          },
          {
            path: 'untaggedresources',
            data: {
              menu: {
                title: 'UNTAGGED RESOURCES',
              }
            }
          }
        ]
      },
      {
        path: 'accounts',
        data: {
          menu: {
            title: 'Accounts',
            //icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'agentreports',
        data: {
          menu: {
            title: 'Agent Reports',
            //icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'bastionhost',
        data: {
          menu: {
            title: 'All Bastion Hosts',
            //icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'accesscontrols',
        data: {
          menu: {
            title: 'Access Controls',
            //icon: 'fa fa-universal-access',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'adminuser',
            data: {
              menu: {
                title: 'IAM Admin User',
              }
            }
          },
          {
            path: 'passwordpolicy',
            data: {
              menu: {
                title: 'IAM Password Policy',
              }
            }
          },
          {
            path: 'rootaccountmfa',
            data: {
              menu: {
                title: 'Root Accounts Without MFA',
              }
            }
          },
          {
            path: 'rootaccountkey',
            data: {
              menu: {
                title: 'Root Account With AccessKey',
              }
            }
          },
          {
            path: 'passwordcheck',
            data: {
              menu: {
                title: 'IAM Console Password Check',
              }
            }
          },
          {
            path: 'accesskeyage',
            data: {
              menu: {
                title: 'Access Key Age',
              }
            }
          }
        ]
      },
      {
        path: 'performance',
        data: {
          menu: {
            title: 'Performance',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'ec2ebsoptimise',
            data: {
              menu: {
                title: 'Not Optimized ec2'
              }
            }
          },
          {
            path: 's3limitexceed',
            data: {
              menu: {
                title: 'S3 Limit'
              }
            }
          }
        ]
      },
      //-------------------------------scheduledevents---------------------------------------------------------
      {
        path: 'scheduledevents',
        data: {
          menu: {
            title: 'Scheduled Events',
            //icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      //----------------------------security-------------------------------------------------------------------

      {
        path: 'security',
        data: {
          menu: {
            title: 'Security',
            //icon: 'ion-key',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'dbsecurity',
            data: {
              menu: {
                title: 'DB Security',
                // //icon: 'fa fa-universal-access',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'dbencryption',
                data: {
                  menu: {
                    title: 'DB ENCRYPTION',
                  }
                }
              }
            ]
          }
          ,
          {
            path: 'generalsecurity',
            data: {
              menu: {
                title: 'General Security',
                // //icon: 'fa fa-universal-access',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'cloudtrailstatus',
                data: {
                  menu: {
                    title: 'CLOUDTRAIL STATUS',
                  }
                }
              },
              {
                path: 'elkaccounts',
                data: {
                  menu: {
                    title: 'ELKACCOUNTS',
                  }
                }
              },
              {
                path: 'publicami',
                data: {
                  menu: {
                    title: 'PUBLIC AMI\'s',
                  }
                }
              },
              {
                path: 'vpcflowlog',
                data: {
                  menu: {
                    title: 'VPC FLOWLOG',
                  }
                }
              }
            ]
          }
          ,
          {
            path: 'infrastructuresecurity',
            data: {
              menu: {
                title: 'Infrastructure Security',
                // //icon: 'fa fa-universal-access',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'elbaccesslog',
                data: {
                  menu: {
                    title: 'ELB ACCESS LOG',
                  }
                }
              },
              {
                path: 'elbcipherversion',
                data: {
                  menu: {
                    title: 'ELB CIPHERVERSION',
                  }
                }
              },
              {
                path: 'unusedkey',
                data: {
                  menu: {
                    title: 'IAM UNUSED KEY',
                  }
                }
              },
              {
                path: 'unusedusers',
                data: {
                  menu: {
                    title: 'IAM UNUSED USERS',
                  }
                }
              },
              {
                path: 'userswithoutmfa',
                data: {
                  menu: {
                    title: 'IAM USERS WITHOUT MFA',
                  }
                }
              },
              {
                path: 's3logging',
                data: {
                  menu: {
                    title: 'S3 LOGGING',
                  }
                }
              },
              {
                path: 'termination',
                data: {
                  menu: {
                    title: 'TERMINATION PROTECTION',
                  }
                }
              },
              {
                path: 'unusedsshkey',
                data: {
                  menu: {
                    title: 'UNUSED SSH KEY',
                  }
                }
              },
              {
                path: 'usedkmskeys',
                data: {
                  menu: {
                    title: 'Used KMS Keys',
                  }
                }
              }
            ]
          },
          {
            path: 'networksecurity',
            data: {
              menu: {
                title: 'Network Security',
                // //icon: 'fa fa-universal-access',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'opensecuritygroup',
                data: {
                  menu: {
                    title: 'OPEN SECURITY GROUP',
                  }
                }
              },
              {
                path: 's3opentopublic',
                data: {
                  menu: {
                    title: 'S3 OPEN TO PUBLIC',
                  }
                }
              },
              {
                path: 'sslcertificate',
                data: {
                  menu: {
                    title: 'SSL CERTIFICATE',
                  }
                }
              }
            ]
          }
        ]
      }
      //----------------------------------------------
    ]
  }
];
