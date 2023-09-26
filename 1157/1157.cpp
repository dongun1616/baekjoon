#include <iostream>
#include <string>

using namespace std;

int main()
{
    string S;
    string Alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string alp = "abcdefghijklmnopqrstuvwxyz";
    int result = 0;
    int max1 = 0;
    int max2 = 0;

    cin >> S;
    for(int a=0;a<Alp.length();a++)
    {
        for(int b=0;b<S.length();b++)
        {
            if(S[b] == Alp[a])
            {
                max1 = Alp[a];
            }
        }              
    }

    for(int a=0;a<alp.length();a++)
    {
        for(int b=0;b<S.length();b++)
        {
            if(S[b] == alp[a])
            {
                max2 = alp[a];
            }
        }              
    }

    if(max1 > max2)
    {
        cout << max1;
    }
    else
    {
        cout << "?";
    }
    

    return 0;
}