#include <iostream>

using namespace std;
int main()
{
    int arr[101] = {0};
    int N, M, i, j, temp;

    cin >> N >> M;

    for (int a=1;a<=N;a++)
    {
        arr[a] = a;
    }
    while(M--)
    {
        cin >> i >> j;
        for(int a=0;a<=(j-i)/2;a++)
        {
            temp = arr[a+i];
            arr[a+i] = arr[j-a];
            arr[j-a] = temp;
        }
    }
    for (int a=1;a<=N;a++)
    {
        cout << arr[a] << " ";
    }

    return 0;
}